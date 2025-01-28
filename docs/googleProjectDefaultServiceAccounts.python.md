# `googleProjectDefaultServiceAccounts` Submodule <a name="`googleProjectDefaultServiceAccounts` Submodule" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProjectDefaultServiceAccounts <a name="GoogleProjectDefaultServiceAccounts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts google_project_default_service_accounts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_default_service_accounts

googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  project: str,
  id: str = None,
  restore_policy: str = None,
  timeouts: GoogleProjectDefaultServiceAccountsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.action">action</a></code> | <code>str</code> | The action to be performed in the default service accounts. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.project">project</a></code> | <code>str</code> | The project ID where service accounts are created. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#id GoogleProjectDefaultServiceAccounts#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.restorePolicy">restore_policy</a></code> | <code>str</code> | The action to be performed in the default service accounts on the resource destroy. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.action"></a>

- *Type:* str

The action to be performed in the default service accounts.

Valid values are: DEPRIVILEGE, DELETE, DISABLE.
Note that DEPRIVILEGE action will ignore the REVERT configuration in the restore_policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#action GoogleProjectDefaultServiceAccounts#action}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.project"></a>

- *Type:* str

The project ID where service accounts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#project GoogleProjectDefaultServiceAccounts#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#id GoogleProjectDefaultServiceAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.restorePolicy"></a>

- *Type:* str

The action to be performed in the default service accounts on the resource destroy.

Valid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#restore_policy GoogleProjectDefaultServiceAccounts#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#timeouts GoogleProjectDefaultServiceAccounts#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetRestorePolicy">reset_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#create GoogleProjectDefaultServiceAccounts#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#delete GoogleProjectDefaultServiceAccounts#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#read GoogleProjectDefaultServiceAccounts#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_restore_policy` <a name="reset_restore_policy" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetRestorePolicy"></a>

```python
def reset_restore_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleProjectDefaultServiceAccounts resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_default_service_accounts

googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_default_service_accounts

googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_default_service_accounts

googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_default_service_accounts

googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleProjectDefaultServiceAccounts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleProjectDefaultServiceAccounts to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleProjectDefaultServiceAccounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleProjectDefaultServiceAccounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.serviceAccounts">service_accounts</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference">GoogleProjectDefaultServiceAccountsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.restorePolicyInput">restore_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.restorePolicy">restore_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_accounts`<sup>Required</sup> <a name="service_accounts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.serviceAccounts"></a>

```python
service_accounts: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.timeouts"></a>

```python
timeouts: GoogleProjectDefaultServiceAccountsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference">GoogleProjectDefaultServiceAccountsTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `restore_policy_input`<sup>Optional</sup> <a name="restore_policy_input" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.restorePolicyInput"></a>

```python
restore_policy_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleProjectDefaultServiceAccountsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `restore_policy`<sup>Required</sup> <a name="restore_policy" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.restorePolicy"></a>

```python
restore_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProjectDefaultServiceAccountsConfig <a name="GoogleProjectDefaultServiceAccountsConfig" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_default_service_accounts

googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  project: str,
  id: str = None,
  restore_policy: str = None,
  timeouts: GoogleProjectDefaultServiceAccountsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.action">action</a></code> | <code>str</code> | The action to be performed in the default service accounts. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.project">project</a></code> | <code>str</code> | The project ID where service accounts are created. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#id GoogleProjectDefaultServiceAccounts#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.restorePolicy">restore_policy</a></code> | <code>str</code> | The action to be performed in the default service accounts on the resource destroy. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The action to be performed in the default service accounts.

Valid values are: DEPRIVILEGE, DELETE, DISABLE.
Note that DEPRIVILEGE action will ignore the REVERT configuration in the restore_policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#action GoogleProjectDefaultServiceAccounts#action}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project ID where service accounts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#project GoogleProjectDefaultServiceAccounts#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#id GoogleProjectDefaultServiceAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.restorePolicy"></a>

```python
restore_policy: str
```

- *Type:* str

The action to be performed in the default service accounts on the resource destroy.

Valid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#restore_policy GoogleProjectDefaultServiceAccounts#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.timeouts"></a>

```python
timeouts: GoogleProjectDefaultServiceAccountsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#timeouts GoogleProjectDefaultServiceAccounts#timeouts}

---

### GoogleProjectDefaultServiceAccountsTimeouts <a name="GoogleProjectDefaultServiceAccountsTimeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_default_service_accounts

googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#create GoogleProjectDefaultServiceAccounts#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#delete GoogleProjectDefaultServiceAccounts#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#read GoogleProjectDefaultServiceAccounts#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#create GoogleProjectDefaultServiceAccounts#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#delete GoogleProjectDefaultServiceAccounts#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_default_service_accounts#read GoogleProjectDefaultServiceAccounts#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleProjectDefaultServiceAccountsTimeoutsOutputReference <a name="GoogleProjectDefaultServiceAccountsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_default_service_accounts

googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleProjectDefaultServiceAccountsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a>]

---



