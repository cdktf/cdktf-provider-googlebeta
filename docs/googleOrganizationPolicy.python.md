# `googleOrganizationPolicy` Submodule <a name="`googleOrganizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrganizationPolicy <a name="GoogleOrganizationPolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy google_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicy(
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
  org_id: str,
  boolean_policy: GoogleOrganizationPolicyBooleanPolicy = None,
  id: str = None,
  list_policy: GoogleOrganizationPolicyListPolicy = None,
  restore_policy: GoogleOrganizationPolicyRestorePolicy = None,
  timeouts: GoogleOrganizationPolicyTimeouts = None,
  version: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.constraint">constraint</a></code> | <code>str</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#org_id GoogleOrganizationPolicy#org_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#id GoogleOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.version">version</a></code> | <code>typing.Union[int, float]</code> | Version of the Policy. Default version is 0. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.constraint"></a>

- *Type:* str

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#constraint GoogleOrganizationPolicy#constraint}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.orgId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#org_id GoogleOrganizationPolicy#org_id}.

---

##### `boolean_policy`<sup>Optional</sup> <a name="boolean_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.booleanPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#boolean_policy GoogleOrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#id GoogleOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `list_policy`<sup>Optional</sup> <a name="list_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.listPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#list_policy GoogleOrganizationPolicy#list_policy}

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.restorePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#restore_policy GoogleOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#timeouts GoogleOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.Initializer.parameter.version"></a>

- *Type:* typing.Union[int, float]

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#version GoogleOrganizationPolicy#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putBooleanPolicy">put_boolean_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putListPolicy">put_list_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putRestorePolicy">put_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetBooleanPolicy">reset_boolean_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetListPolicy">reset_list_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetRestorePolicy">reset_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_boolean_policy` <a name="put_boolean_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putBooleanPolicy"></a>

```python
def put_boolean_policy(
  enforced: typing.Union[bool, IResolvable]
) -> None
```

###### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putBooleanPolicy.parameter.enforced"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#enforced GoogleOrganizationPolicy#enforced}

---

##### `put_list_policy` <a name="put_list_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putListPolicy"></a>

```python
def put_list_policy(
  allow: GoogleOrganizationPolicyListPolicyAllow = None,
  deny: GoogleOrganizationPolicyListPolicyDeny = None,
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  suggested_value: str = None
) -> None
```

###### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putListPolicy.parameter.allow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow">GoogleOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#allow GoogleOrganizationPolicy#allow}

---

###### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putListPolicy.parameter.deny"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny">GoogleOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#deny GoogleOrganizationPolicy#deny}

---

###### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putListPolicy.parameter.inheritFromParent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#inherit_from_parent GoogleOrganizationPolicy#inherit_from_parent}

---

###### `suggested_value`<sup>Optional</sup> <a name="suggested_value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putListPolicy.parameter.suggestedValue"></a>

- *Type:* str

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#suggested_value GoogleOrganizationPolicy#suggested_value}

---

##### `put_restore_policy` <a name="put_restore_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putRestorePolicy"></a>

```python
def put_restore_policy(
  default: typing.Union[bool, IResolvable]
) -> None
```

###### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putRestorePolicy.parameter.default"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#default GoogleOrganizationPolicy#default}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#create GoogleOrganizationPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#delete GoogleOrganizationPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#read GoogleOrganizationPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#update GoogleOrganizationPolicy#update}.

---

##### `reset_boolean_policy` <a name="reset_boolean_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetBooleanPolicy"></a>

```python
def reset_boolean_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_list_policy` <a name="reset_list_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetListPolicy"></a>

```python
def reset_list_policy() -> None
```

##### `reset_restore_policy` <a name="reset_restore_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetRestorePolicy"></a>

```python
def reset_restore_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleOrganizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleOrganizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleOrganizationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference">GoogleOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference">GoogleOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference">GoogleOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference">GoogleOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.booleanPolicyInput">boolean_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.listPolicyInput">list_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.restorePolicyInput">restore_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `boolean_policy`<sup>Required</sup> <a name="boolean_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.booleanPolicy"></a>

```python
boolean_policy: GoogleOrganizationPolicyBooleanPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference">GoogleOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `list_policy`<sup>Required</sup> <a name="list_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.listPolicy"></a>

```python
list_policy: GoogleOrganizationPolicyListPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference">GoogleOrganizationPolicyListPolicyOutputReference</a>

---

##### `restore_policy`<sup>Required</sup> <a name="restore_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.restorePolicy"></a>

```python
restore_policy: GoogleOrganizationPolicyRestorePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference">GoogleOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.timeouts"></a>

```python
timeouts: GoogleOrganizationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference">GoogleOrganizationPolicyTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `boolean_policy_input`<sup>Optional</sup> <a name="boolean_policy_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.booleanPolicyInput"></a>

```python
boolean_policy_input: GoogleOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a>

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `list_policy_input`<sup>Optional</sup> <a name="list_policy_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.listPolicyInput"></a>

```python
list_policy_input: GoogleOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a>

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `restore_policy_input`<sup>Optional</sup> <a name="restore_policy_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.restorePolicyInput"></a>

```python
restore_policy_input: GoogleOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleOrganizationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrganizationPolicyBooleanPolicy <a name="GoogleOrganizationPolicyBooleanPolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy(
  enforced: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy.property.enforced">enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy.property.enforced"></a>

```python
enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#enforced GoogleOrganizationPolicy#enforced}

---

### GoogleOrganizationPolicyConfig <a name="GoogleOrganizationPolicyConfig" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  constraint: str,
  org_id: str,
  boolean_policy: GoogleOrganizationPolicyBooleanPolicy = None,
  id: str = None,
  list_policy: GoogleOrganizationPolicyListPolicy = None,
  restore_policy: GoogleOrganizationPolicyRestorePolicy = None,
  timeouts: GoogleOrganizationPolicyTimeouts = None,
  version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.constraint">constraint</a></code> | <code>str</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#org_id GoogleOrganizationPolicy#org_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#id GoogleOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Version of the Policy. Default version is 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#constraint GoogleOrganizationPolicy#constraint}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#org_id GoogleOrganizationPolicy#org_id}.

---

##### `boolean_policy`<sup>Optional</sup> <a name="boolean_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.booleanPolicy"></a>

```python
boolean_policy: GoogleOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#boolean_policy GoogleOrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#id GoogleOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `list_policy`<sup>Optional</sup> <a name="list_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.listPolicy"></a>

```python
list_policy: GoogleOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#list_policy GoogleOrganizationPolicy#list_policy}

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.restorePolicy"></a>

```python
restore_policy: GoogleOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#restore_policy GoogleOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleOrganizationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#timeouts GoogleOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyConfig.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#version GoogleOrganizationPolicy#version}

---

### GoogleOrganizationPolicyListPolicy <a name="GoogleOrganizationPolicyListPolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy(
  allow: GoogleOrganizationPolicyListPolicyAllow = None,
  deny: GoogleOrganizationPolicyListPolicyDeny = None,
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  suggested_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow">GoogleOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny">GoogleOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.suggestedValue">suggested_value</a></code> | <code>str</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.allow"></a>

```python
allow: GoogleOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow">GoogleOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#allow GoogleOrganizationPolicy#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.deny"></a>

```python
deny: GoogleOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny">GoogleOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#deny GoogleOrganizationPolicy#deny}

---

##### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#inherit_from_parent GoogleOrganizationPolicy#inherit_from_parent}

---

##### `suggested_value`<sup>Optional</sup> <a name="suggested_value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy.property.suggestedValue"></a>

```python
suggested_value: str
```

- *Type:* str

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#suggested_value GoogleOrganizationPolicy#suggested_value}

---

### GoogleOrganizationPolicyListPolicyAllow <a name="GoogleOrganizationPolicyListPolicyAllow" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow.property.values">values</a></code> | <code>typing.List[str]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#all GoogleOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#values GoogleOrganizationPolicy#values}

---

### GoogleOrganizationPolicyListPolicyDeny <a name="GoogleOrganizationPolicyListPolicyDeny" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny.property.values">values</a></code> | <code>typing.List[str]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#all GoogleOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#values GoogleOrganizationPolicy#values}

---

### GoogleOrganizationPolicyRestorePolicy <a name="GoogleOrganizationPolicyRestorePolicy" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy(
  default: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#default GoogleOrganizationPolicy#default}

---

### GoogleOrganizationPolicyTimeouts <a name="GoogleOrganizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#create GoogleOrganizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#delete GoogleOrganizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#read GoogleOrganizationPolicy#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#update GoogleOrganizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#create GoogleOrganizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#delete GoogleOrganizationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#read GoogleOrganizationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#update GoogleOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOrganizationPolicyBooleanPolicyOutputReference <a name="GoogleOrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">enforced_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.enforced">enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforced_input`<sup>Optional</sup> <a name="enforced_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```python
enforced_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```python
enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyBooleanPolicy">GoogleOrganizationPolicyBooleanPolicy</a>

---


### GoogleOrganizationPolicyListPolicyAllowOutputReference <a name="GoogleOrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.allInput">all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow">GoogleOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```python
all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow">GoogleOrganizationPolicyListPolicyAllow</a>

---


### GoogleOrganizationPolicyListPolicyDenyOutputReference <a name="GoogleOrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.allInput">all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny">GoogleOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```python
all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny">GoogleOrganizationPolicyListPolicyDeny</a>

---


### GoogleOrganizationPolicyListPolicyOutputReference <a name="GoogleOrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.putAllow">put_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.putDeny">put_deny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetAllow">reset_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetDeny">reset_deny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">reset_inherit_from_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">reset_suggested_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allow` <a name="put_allow" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```python
def put_allow(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.putAllow.parameter.all"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#all GoogleOrganizationPolicy#all}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.putAllow.parameter.values"></a>

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#values GoogleOrganizationPolicy#values}

---

##### `put_deny` <a name="put_deny" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```python
def put_deny(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.putDeny.parameter.all"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#all GoogleOrganizationPolicy#all}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.putDeny.parameter.values"></a>

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_organization_policy#values GoogleOrganizationPolicy#values}

---

##### `reset_allow` <a name="reset_allow" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```python
def reset_allow() -> None
```

##### `reset_deny` <a name="reset_deny" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```python
def reset_deny() -> None
```

##### `reset_inherit_from_parent` <a name="reset_inherit_from_parent" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```python
def reset_inherit_from_parent() -> None
```

##### `reset_suggested_value` <a name="reset_suggested_value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```python
def reset_suggested_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference">GoogleOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference">GoogleOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.allowInput">allow_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow">GoogleOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.denyInput">deny_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny">GoogleOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">inherit_from_parent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">suggested_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.suggestedValue">suggested_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```python
allow: GoogleOrganizationPolicyListPolicyAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllowOutputReference">GoogleOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```python
deny: GoogleOrganizationPolicyListPolicyDenyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDenyOutputReference">GoogleOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `allow_input`<sup>Optional</sup> <a name="allow_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```python
allow_input: GoogleOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyAllow">GoogleOrganizationPolicyListPolicyAllow</a>

---

##### `deny_input`<sup>Optional</sup> <a name="deny_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```python
deny_input: GoogleOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyDeny">GoogleOrganizationPolicyListPolicyDeny</a>

---

##### `inherit_from_parent_input`<sup>Optional</sup> <a name="inherit_from_parent_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```python
inherit_from_parent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suggested_value_input`<sup>Optional</sup> <a name="suggested_value_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```python
suggested_value_input: str
```

- *Type:* str

---

##### `inherit_from_parent`<sup>Required</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suggested_value`<sup>Required</sup> <a name="suggested_value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```python
suggested_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyListPolicy">GoogleOrganizationPolicyListPolicy</a>

---


### GoogleOrganizationPolicyRestorePolicyOutputReference <a name="GoogleOrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```python
default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyRestorePolicy">GoogleOrganizationPolicyRestorePolicy</a>

---


### GoogleOrganizationPolicyTimeoutsOutputReference <a name="GoogleOrganizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_policy

googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleOrganizationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrganizationPolicy.GoogleOrganizationPolicyTimeouts">GoogleOrganizationPolicyTimeouts</a>]

---



