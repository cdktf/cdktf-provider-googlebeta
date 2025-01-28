# `googleOrgPolicyPolicy` Submodule <a name="`googleOrgPolicyPolicy` Submodule" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrgPolicyPolicy <a name="GoogleOrgPolicyPolicy" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy google_org_policy_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  dry_run_spec: GoogleOrgPolicyPolicyDryRunSpec = None,
  id: str = None,
  spec: GoogleOrgPolicyPolicySpec = None,
  timeouts: GoogleOrgPolicyPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.dryRunSpec">dry_run_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a></code> | dry_run_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#id GoogleOrgPolicyPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.name"></a>

- *Type:* str

Immutable.

The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * 'projects/{project_number}/policies/{constraint_name}' * 'folders/{folder_id}/policies/{constraint_name}' * 'organizations/{organization_id}/policies/{constraint_name}' For example, "projects/123/policies/compute.disableSerialPortAccess". Note: 'projects/{project_id}/policies/{constraint_name}' is also an acceptable name for API requests, but responses will return the name using the equivalent project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#name GoogleOrgPolicyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.parent"></a>

- *Type:* str

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#parent GoogleOrgPolicyPolicy#parent}

---

##### `dry_run_spec`<sup>Optional</sup> <a name="dry_run_spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.dryRunSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a>

dry_run_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#dry_run_spec GoogleOrgPolicyPolicy#dry_run_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#id GoogleOrgPolicyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#spec GoogleOrgPolicyPolicy#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#timeouts GoogleOrgPolicyPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putDryRunSpec">put_dry_run_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetDryRunSpec">reset_dry_run_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetSpec">reset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dry_run_spec` <a name="put_dry_run_spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putDryRunSpec"></a>

```python
def put_dry_run_spec(
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  reset: typing.Union[bool, IResolvable] = None,
  rules: typing.Union[IResolvable, typing.List[GoogleOrgPolicyPolicyDryRunSpecRules]] = None
) -> None
```

###### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putDryRunSpec.parameter.inheritFromParent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines the inheritance behavior for this policy.

If 'inherit_from_parent' is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#inherit_from_parent GoogleOrgPolicyPolicy#inherit_from_parent}

---

###### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putDryRunSpec.parameter.reset"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific constraint at this resource.

This field can be set in policies for either list or boolean constraints. If set, 'rules' must be empty and 'inherit_from_parent' must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#reset GoogleOrgPolicyPolicy#reset}

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putDryRunSpec.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#rules GoogleOrgPolicyPolicy#rules}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putSpec"></a>

```python
def put_spec(
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  reset: typing.Union[bool, IResolvable] = None,
  rules: typing.Union[IResolvable, typing.List[GoogleOrgPolicyPolicySpecRules]] = None
) -> None
```

###### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putSpec.parameter.inheritFromParent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines the inheritance behavior for this 'Policy'.

If 'inherit_from_parent' is true, PolicyRules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this Policy becomes the new root for evaluation. This field can be set only for Policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#inherit_from_parent GoogleOrgPolicyPolicy#inherit_from_parent}

---

###### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putSpec.parameter.reset"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific 'Constraint' at this resource.

This field can be set in policies for either list or boolean constraints. If set, 'rules' must be empty and 'inherit_from_parent' must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#reset GoogleOrgPolicyPolicy#reset}

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putSpec.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#rules GoogleOrgPolicyPolicy#rules}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#create GoogleOrgPolicyPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#delete GoogleOrgPolicyPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#update GoogleOrgPolicyPolicy#update}.

---

##### `reset_dry_run_spec` <a name="reset_dry_run_spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetDryRunSpec"></a>

```python
def reset_dry_run_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetSpec"></a>

```python
def reset_spec() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleOrgPolicyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleOrgPolicyPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleOrgPolicyPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleOrgPolicyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOrgPolicyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.dryRunSpec">dry_run_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference">GoogleOrgPolicyPolicyDryRunSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference">GoogleOrgPolicyPolicySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference">GoogleOrgPolicyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.dryRunSpecInput">dry_run_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dry_run_spec`<sup>Required</sup> <a name="dry_run_spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.dryRunSpec"></a>

```python
dry_run_spec: GoogleOrgPolicyPolicyDryRunSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference">GoogleOrgPolicyPolicyDryRunSpecOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.spec"></a>

```python
spec: GoogleOrgPolicyPolicySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference">GoogleOrgPolicyPolicySpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.timeouts"></a>

```python
timeouts: GoogleOrgPolicyPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference">GoogleOrgPolicyPolicyTimeoutsOutputReference</a>

---

##### `dry_run_spec_input`<sup>Optional</sup> <a name="dry_run_spec_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.dryRunSpecInput"></a>

```python
dry_run_spec_input: GoogleOrgPolicyPolicyDryRunSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.specInput"></a>

```python
spec_input: GoogleOrgPolicyPolicySpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleOrgPolicyPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrgPolicyPolicyConfig <a name="GoogleOrgPolicyPolicyConfig" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  dry_run_spec: GoogleOrgPolicyPolicyDryRunSpec = None,
  id: str = None,
  spec: GoogleOrgPolicyPolicySpec = None,
  timeouts: GoogleOrgPolicyPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.name">name</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.dryRunSpec">dry_run_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a></code> | dry_run_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#id GoogleOrgPolicyPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Immutable.

The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * 'projects/{project_number}/policies/{constraint_name}' * 'folders/{folder_id}/policies/{constraint_name}' * 'organizations/{organization_id}/policies/{constraint_name}' For example, "projects/123/policies/compute.disableSerialPortAccess". Note: 'projects/{project_id}/policies/{constraint_name}' is also an acceptable name for API requests, but responses will return the name using the equivalent project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#name GoogleOrgPolicyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#parent GoogleOrgPolicyPolicy#parent}

---

##### `dry_run_spec`<sup>Optional</sup> <a name="dry_run_spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.dryRunSpec"></a>

```python
dry_run_spec: GoogleOrgPolicyPolicyDryRunSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a>

dry_run_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#dry_run_spec GoogleOrgPolicyPolicy#dry_run_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#id GoogleOrgPolicyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.spec"></a>

```python
spec: GoogleOrgPolicyPolicySpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#spec GoogleOrgPolicyPolicy#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleOrgPolicyPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#timeouts GoogleOrgPolicyPolicy#timeouts}

---

### GoogleOrgPolicyPolicyDryRunSpec <a name="GoogleOrgPolicyPolicyDryRunSpec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec(
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  reset: typing.Union[bool, IResolvable] = None,
  rules: typing.Union[IResolvable, typing.List[GoogleOrgPolicyPolicyDryRunSpecRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines the inheritance behavior for this policy. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec.property.reset">reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific constraint at this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>]]</code> | rules block. |

---

##### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines the inheritance behavior for this policy.

If 'inherit_from_parent' is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#inherit_from_parent GoogleOrgPolicyPolicy#inherit_from_parent}

---

##### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec.property.reset"></a>

```python
reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific constraint at this resource.

This field can be set in policies for either list or boolean constraints. If set, 'rules' must be empty and 'inherit_from_parent' must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#reset GoogleOrgPolicyPolicy#reset}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[GoogleOrgPolicyPolicyDryRunSpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#rules GoogleOrgPolicyPolicy#rules}

---

### GoogleOrgPolicyPolicyDryRunSpecRules <a name="GoogleOrgPolicyPolicyDryRunSpecRules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules(
  allow_all: str = None,
  condition: GoogleOrgPolicyPolicyDryRunSpecRulesCondition = None,
  deny_all: str = None,
  enforce: str = None,
  parameters: str = None,
  values: GoogleOrgPolicyPolicyDryRunSpecRulesValues = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.allowAll">allow_all</a></code> | <code>str</code> | Setting this to '"TRUE"' means that all values are allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition">GoogleOrgPolicyPolicyDryRunSpecRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.denyAll">deny_all</a></code> | <code>str</code> | Setting this to '"TRUE"' means that all values are denied. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.enforce">enforce</a></code> | <code>str</code> | If '"TRUE"', then the 'Policy' is enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.parameters">parameters</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.values">values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues">GoogleOrgPolicyPolicyDryRunSpecRulesValues</a></code> | values block. |

---

##### `allow_all`<sup>Optional</sup> <a name="allow_all" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.allowAll"></a>

```python
allow_all: str
```

- *Type:* str

Setting this to '"TRUE"' means that all values are allowed.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#allow_all GoogleOrgPolicyPolicy#allow_all}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.condition"></a>

```python
condition: GoogleOrgPolicyPolicyDryRunSpecRulesCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition">GoogleOrgPolicyPolicyDryRunSpecRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#condition GoogleOrgPolicyPolicy#condition}

---

##### `deny_all`<sup>Optional</sup> <a name="deny_all" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.denyAll"></a>

```python
deny_all: str
```

- *Type:* str

Setting this to '"TRUE"' means that all values are denied.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#deny_all GoogleOrgPolicyPolicy#deny_all}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.enforce"></a>

```python
enforce: str
```

- *Type:* str

If '"TRUE"', then the 'Policy' is enforced.

If '"FALSE"', then any configuration is acceptable. This field can be set only in Policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#enforce GoogleOrgPolicyPolicy#enforce}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Optional.

Required for Managed Constraints if parameters defined in constraints. Pass parameter values when policy enforcement is enabled. Ensure that parameter value types match those defined in the constraint definition. For example: { "allowedLocations" : ["us-east1", "us-west1"], "allowAll" : true }

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#parameters GoogleOrgPolicyPolicy#parameters}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules.property.values"></a>

```python
values: GoogleOrgPolicyPolicyDryRunSpecRulesValues
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues">GoogleOrgPolicyPolicyDryRunSpecRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#values GoogleOrgPolicyPolicy#values}

---

### GoogleOrgPolicyPolicyDryRunSpecRulesCondition <a name="GoogleOrgPolicyPolicyDryRunSpecRulesCondition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.description">description</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.location">location</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.title">title</a></code> | <code>str</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#description GoogleOrgPolicyPolicy#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#expression GoogleOrgPolicyPolicy#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.location"></a>

```python
location: str
```

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#location GoogleOrgPolicyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#title GoogleOrgPolicyPolicy#title}

---

### GoogleOrgPolicyPolicyDryRunSpecRulesValues <a name="GoogleOrgPolicyPolicyDryRunSpecRulesValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues(
  allowed_values: typing.List[str] = None,
  denied_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues.property.deniedValues">denied_values</a></code> | <code>typing.List[str]</code> | List of values denied at this resource. |

---

##### `allowed_values`<sup>Optional</sup> <a name="allowed_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#allowed_values GoogleOrgPolicyPolicy#allowed_values}

---

##### `denied_values`<sup>Optional</sup> <a name="denied_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues.property.deniedValues"></a>

```python
denied_values: typing.List[str]
```

- *Type:* typing.List[str]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#denied_values GoogleOrgPolicyPolicy#denied_values}

---

### GoogleOrgPolicyPolicySpec <a name="GoogleOrgPolicyPolicySpec" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec(
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  reset: typing.Union[bool, IResolvable] = None,
  rules: typing.Union[IResolvable, typing.List[GoogleOrgPolicyPolicySpecRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines the inheritance behavior for this 'Policy'. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.reset">reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific 'Constraint' at this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>]]</code> | rules block. |

---

##### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines the inheritance behavior for this 'Policy'.

If 'inherit_from_parent' is true, PolicyRules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this Policy becomes the new root for evaluation. This field can be set only for Policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#inherit_from_parent GoogleOrgPolicyPolicy#inherit_from_parent}

---

##### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.reset"></a>

```python
reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific 'Constraint' at this resource.

This field can be set in policies for either list or boolean constraints. If set, 'rules' must be empty and 'inherit_from_parent' must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#reset GoogleOrgPolicyPolicy#reset}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[GoogleOrgPolicyPolicySpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#rules GoogleOrgPolicyPolicy#rules}

---

### GoogleOrgPolicyPolicySpecRules <a name="GoogleOrgPolicyPolicySpecRules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules(
  allow_all: str = None,
  condition: GoogleOrgPolicyPolicySpecRulesCondition = None,
  deny_all: str = None,
  enforce: str = None,
  parameters: str = None,
  values: GoogleOrgPolicyPolicySpecRulesValues = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.allowAll">allow_all</a></code> | <code>str</code> | Setting this to '"TRUE"' means that all values are allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.denyAll">deny_all</a></code> | <code>str</code> | Setting this to '"TRUE"' means that all values are denied. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.enforce">enforce</a></code> | <code>str</code> | If '"TRUE"', then the 'Policy' is enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.parameters">parameters</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.values">values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a></code> | values block. |

---

##### `allow_all`<sup>Optional</sup> <a name="allow_all" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.allowAll"></a>

```python
allow_all: str
```

- *Type:* str

Setting this to '"TRUE"' means that all values are allowed.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#allow_all GoogleOrgPolicyPolicy#allow_all}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.condition"></a>

```python
condition: GoogleOrgPolicyPolicySpecRulesCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#condition GoogleOrgPolicyPolicy#condition}

---

##### `deny_all`<sup>Optional</sup> <a name="deny_all" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.denyAll"></a>

```python
deny_all: str
```

- *Type:* str

Setting this to '"TRUE"' means that all values are denied.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#deny_all GoogleOrgPolicyPolicy#deny_all}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.enforce"></a>

```python
enforce: str
```

- *Type:* str

If '"TRUE"', then the 'Policy' is enforced.

If '"FALSE"', then any configuration is acceptable. This field can be set only in Policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#enforce GoogleOrgPolicyPolicy#enforce}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Optional.

Required for Managed Constraints if parameters defined in constraints. Pass parameter values when policy enforcement is enabled. Ensure that parameter value types match those defined in the constraint definition. For example: { "allowedLocations" : ["us-east1", "us-west1"], "allowAll" : true }

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#parameters GoogleOrgPolicyPolicy#parameters}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules.property.values"></a>

```python
values: GoogleOrgPolicyPolicySpecRulesValues
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#values GoogleOrgPolicyPolicy#values}

---

### GoogleOrgPolicyPolicySpecRulesCondition <a name="GoogleOrgPolicyPolicySpecRulesCondition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.description">description</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.location">location</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.title">title</a></code> | <code>str</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#description GoogleOrgPolicyPolicy#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#expression GoogleOrgPolicyPolicy#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.location"></a>

```python
location: str
```

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#location GoogleOrgPolicyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#title GoogleOrgPolicyPolicy#title}

---

### GoogleOrgPolicyPolicySpecRulesValues <a name="GoogleOrgPolicyPolicySpecRulesValues" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues(
  allowed_values: typing.List[str] = None,
  denied_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.property.deniedValues">denied_values</a></code> | <code>typing.List[str]</code> | List of values denied at this resource. |

---

##### `allowed_values`<sup>Optional</sup> <a name="allowed_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#allowed_values GoogleOrgPolicyPolicy#allowed_values}

---

##### `denied_values`<sup>Optional</sup> <a name="denied_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues.property.deniedValues"></a>

```python
denied_values: typing.List[str]
```

- *Type:* typing.List[str]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#denied_values GoogleOrgPolicyPolicy#denied_values}

---

### GoogleOrgPolicyPolicyTimeouts <a name="GoogleOrgPolicyPolicyTimeouts" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#create GoogleOrgPolicyPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#delete GoogleOrgPolicyPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#update GoogleOrgPolicyPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#create GoogleOrgPolicyPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#delete GoogleOrgPolicyPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#update GoogleOrgPolicyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOrgPolicyPolicyDryRunSpecOutputReference <a name="GoogleOrgPolicyPolicyDryRunSpecOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resetInheritFromParent">reset_inherit_from_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resetReset">reset_reset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[GoogleOrgPolicyPolicyDryRunSpecRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>]]

---

##### `reset_inherit_from_parent` <a name="reset_inherit_from_parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resetInheritFromParent"></a>

```python
def reset_inherit_from_parent() -> None
```

##### `reset_reset` <a name="reset_reset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resetReset"></a>

```python
def reset_reset() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList">GoogleOrgPolicyPolicyDryRunSpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParentInput">inherit_from_parent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.resetInput">reset_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.reset">reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.rules"></a>

```python
rules: GoogleOrgPolicyPolicyDryRunSpecRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList">GoogleOrgPolicyPolicyDryRunSpecRulesList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `inherit_from_parent_input`<sup>Optional</sup> <a name="inherit_from_parent_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParentInput"></a>

```python
inherit_from_parent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reset_input`<sup>Optional</sup> <a name="reset_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.resetInput"></a>

```python
reset_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[GoogleOrgPolicyPolicyDryRunSpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>]]

---

##### `inherit_from_parent`<sup>Required</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reset`<sup>Required</sup> <a name="reset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.reset"></a>

```python
reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOrgPolicyPolicyDryRunSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpec">GoogleOrgPolicyPolicyDryRunSpec</a>

---


### GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference <a name="GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition">GoogleOrgPolicyPolicyDryRunSpecRulesCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOrgPolicyPolicyDryRunSpecRulesCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition">GoogleOrgPolicyPolicyDryRunSpecRulesCondition</a>

---


### GoogleOrgPolicyPolicyDryRunSpecRulesList <a name="GoogleOrgPolicyPolicyDryRunSpecRulesList" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleOrgPolicyPolicyDryRunSpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>]]

---


### GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference <a name="GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putValues">put_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetAllowAll">reset_allow_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetDenyAll">reset_deny_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetEnforce">reset_enforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition"></a>

```python
def put_condition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition.parameter.description"></a>

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#description GoogleOrgPolicyPolicy#description}

---

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#expression GoogleOrgPolicyPolicy#expression}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition.parameter.location"></a>

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#location GoogleOrgPolicyPolicy#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition.parameter.title"></a>

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#title GoogleOrgPolicyPolicy#title}

---

##### `put_values` <a name="put_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putValues"></a>

```python
def put_values(
  allowed_values: typing.List[str] = None,
  denied_values: typing.List[str] = None
) -> None
```

###### `allowed_values`<sup>Optional</sup> <a name="allowed_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putValues.parameter.allowedValues"></a>

- *Type:* typing.List[str]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#allowed_values GoogleOrgPolicyPolicy#allowed_values}

---

###### `denied_values`<sup>Optional</sup> <a name="denied_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.putValues.parameter.deniedValues"></a>

- *Type:* typing.List[str]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#denied_values GoogleOrgPolicyPolicy#denied_values}

---

##### `reset_allow_all` <a name="reset_allow_all" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetAllowAll"></a>

```python
def reset_allow_all() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_deny_all` <a name="reset_deny_all" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetDenyAll"></a>

```python
def reset_deny_all() -> None
```

##### `reset_enforce` <a name="reset_enforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetEnforce"></a>

```python
def reset_enforce() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference">GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference">GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAllInput">allow_all_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition">GoogleOrgPolicyPolicyDryRunSpecRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAllInput">deny_all_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforceInput">enforce_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.valuesInput">values_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues">GoogleOrgPolicyPolicyDryRunSpecRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAll">allow_all</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAll">deny_all</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforce">enforce</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.condition"></a>

```python
condition: GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference">GoogleOrgPolicyPolicyDryRunSpecRulesConditionOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.values"></a>

```python
values: GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference">GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference</a>

---

##### `allow_all_input`<sup>Optional</sup> <a name="allow_all_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAllInput"></a>

```python
allow_all_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.conditionInput"></a>

```python
condition_input: GoogleOrgPolicyPolicyDryRunSpecRulesCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesCondition">GoogleOrgPolicyPolicyDryRunSpecRulesCondition</a>

---

##### `deny_all_input`<sup>Optional</sup> <a name="deny_all_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAllInput"></a>

```python
deny_all_input: str
```

- *Type:* str

---

##### `enforce_input`<sup>Optional</sup> <a name="enforce_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforceInput"></a>

```python
enforce_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.valuesInput"></a>

```python
values_input: GoogleOrgPolicyPolicyDryRunSpecRulesValues
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues">GoogleOrgPolicyPolicyDryRunSpecRulesValues</a>

---

##### `allow_all`<sup>Required</sup> <a name="allow_all" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAll"></a>

```python
allow_all: str
```

- *Type:* str

---

##### `deny_all`<sup>Required</sup> <a name="deny_all" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAll"></a>

```python
deny_all: str
```

- *Type:* str

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforce"></a>

```python
enforce: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleOrgPolicyPolicyDryRunSpecRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRules">GoogleOrgPolicyPolicyDryRunSpecRules</a>]

---


### GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference <a name="GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetAllowedValues">reset_allowed_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetDeniedValues">reset_denied_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_values` <a name="reset_allowed_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetAllowedValues"></a>

```python
def reset_allowed_values() -> None
```

##### `reset_denied_values` <a name="reset_denied_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetDeniedValues"></a>

```python
def reset_denied_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValuesInput">allowed_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValuesInput">denied_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValues">denied_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues">GoogleOrgPolicyPolicyDryRunSpecRulesValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values_input`<sup>Optional</sup> <a name="allowed_values_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValuesInput"></a>

```python
allowed_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_values_input`<sup>Optional</sup> <a name="denied_values_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValuesInput"></a>

```python
denied_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_values`<sup>Required</sup> <a name="denied_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValues"></a>

```python
denied_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOrgPolicyPolicyDryRunSpecRulesValues
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyDryRunSpecRulesValues">GoogleOrgPolicyPolicyDryRunSpecRulesValues</a>

---


### GoogleOrgPolicyPolicySpecOutputReference <a name="GoogleOrgPolicyPolicySpecOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetInheritFromParent">reset_inherit_from_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetReset">reset_reset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[GoogleOrgPolicyPolicySpecRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>]]

---

##### `reset_inherit_from_parent` <a name="reset_inherit_from_parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetInheritFromParent"></a>

```python
def reset_inherit_from_parent() -> None
```

##### `reset_reset` <a name="reset_reset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetReset"></a>

```python
def reset_reset() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList">GoogleOrgPolicyPolicySpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.inheritFromParentInput">inherit_from_parent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.resetInput">reset_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.reset">reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.rules"></a>

```python
rules: GoogleOrgPolicyPolicySpecRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList">GoogleOrgPolicyPolicySpecRulesList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `inherit_from_parent_input`<sup>Optional</sup> <a name="inherit_from_parent_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.inheritFromParentInput"></a>

```python
inherit_from_parent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reset_input`<sup>Optional</sup> <a name="reset_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.resetInput"></a>

```python
reset_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[GoogleOrgPolicyPolicySpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>]]

---

##### `inherit_from_parent`<sup>Required</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reset`<sup>Required</sup> <a name="reset" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.reset"></a>

```python
reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOrgPolicyPolicySpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpec">GoogleOrgPolicyPolicySpec</a>

---


### GoogleOrgPolicyPolicySpecRulesConditionOutputReference <a name="GoogleOrgPolicyPolicySpecRulesConditionOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOrgPolicyPolicySpecRulesCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a>

---


### GoogleOrgPolicyPolicySpecRulesList <a name="GoogleOrgPolicyPolicySpecRulesList" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleOrgPolicyPolicySpecRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleOrgPolicyPolicySpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>]]

---


### GoogleOrgPolicyPolicySpecRulesOutputReference <a name="GoogleOrgPolicyPolicySpecRulesOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putValues">put_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetAllowAll">reset_allow_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetDenyAll">reset_deny_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetEnforce">reset_enforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putCondition"></a>

```python
def put_condition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putCondition.parameter.description"></a>

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#description GoogleOrgPolicyPolicy#description}

---

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#expression GoogleOrgPolicyPolicy#expression}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putCondition.parameter.location"></a>

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#location GoogleOrgPolicyPolicy#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putCondition.parameter.title"></a>

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#title GoogleOrgPolicyPolicy#title}

---

##### `put_values` <a name="put_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putValues"></a>

```python
def put_values(
  allowed_values: typing.List[str] = None,
  denied_values: typing.List[str] = None
) -> None
```

###### `allowed_values`<sup>Optional</sup> <a name="allowed_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putValues.parameter.allowedValues"></a>

- *Type:* typing.List[str]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#allowed_values GoogleOrgPolicyPolicy#allowed_values}

---

###### `denied_values`<sup>Optional</sup> <a name="denied_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.putValues.parameter.deniedValues"></a>

- *Type:* typing.List[str]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_org_policy_policy#denied_values GoogleOrgPolicyPolicy#denied_values}

---

##### `reset_allow_all` <a name="reset_allow_all" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetAllowAll"></a>

```python
def reset_allow_all() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_deny_all` <a name="reset_deny_all" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetDenyAll"></a>

```python
def reset_deny_all() -> None
```

##### `reset_enforce` <a name="reset_enforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetEnforce"></a>

```python
def reset_enforce() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference">GoogleOrgPolicyPolicySpecRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference">GoogleOrgPolicyPolicySpecRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.allowAllInput">allow_all_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.denyAllInput">deny_all_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.enforceInput">enforce_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.valuesInput">values_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.allowAll">allow_all</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.denyAll">deny_all</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.enforce">enforce</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.condition"></a>

```python
condition: GoogleOrgPolicyPolicySpecRulesConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesConditionOutputReference">GoogleOrgPolicyPolicySpecRulesConditionOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.values"></a>

```python
values: GoogleOrgPolicyPolicySpecRulesValuesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference">GoogleOrgPolicyPolicySpecRulesValuesOutputReference</a>

---

##### `allow_all_input`<sup>Optional</sup> <a name="allow_all_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.allowAllInput"></a>

```python
allow_all_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.conditionInput"></a>

```python
condition_input: GoogleOrgPolicyPolicySpecRulesCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesCondition">GoogleOrgPolicyPolicySpecRulesCondition</a>

---

##### `deny_all_input`<sup>Optional</sup> <a name="deny_all_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.denyAllInput"></a>

```python
deny_all_input: str
```

- *Type:* str

---

##### `enforce_input`<sup>Optional</sup> <a name="enforce_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.enforceInput"></a>

```python
enforce_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.valuesInput"></a>

```python
values_input: GoogleOrgPolicyPolicySpecRulesValues
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a>

---

##### `allow_all`<sup>Required</sup> <a name="allow_all" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.allowAll"></a>

```python
allow_all: str
```

- *Type:* str

---

##### `deny_all`<sup>Required</sup> <a name="deny_all" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.denyAll"></a>

```python
deny_all: str
```

- *Type:* str

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.enforce"></a>

```python
enforce: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleOrgPolicyPolicySpecRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRules">GoogleOrgPolicyPolicySpecRules</a>]

---


### GoogleOrgPolicyPolicySpecRulesValuesOutputReference <a name="GoogleOrgPolicyPolicySpecRulesValuesOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resetAllowedValues">reset_allowed_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resetDeniedValues">reset_denied_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_values` <a name="reset_allowed_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resetAllowedValues"></a>

```python
def reset_allowed_values() -> None
```

##### `reset_denied_values` <a name="reset_denied_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.resetDeniedValues"></a>

```python
def reset_denied_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValuesInput">allowed_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValuesInput">denied_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValues">denied_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values_input`<sup>Optional</sup> <a name="allowed_values_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValuesInput"></a>

```python
allowed_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_values_input`<sup>Optional</sup> <a name="denied_values_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValuesInput"></a>

```python
denied_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_values`<sup>Required</sup> <a name="denied_values" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValues"></a>

```python
denied_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValuesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOrgPolicyPolicySpecRulesValues
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicySpecRulesValues">GoogleOrgPolicyPolicySpecRulesValues</a>

---


### GoogleOrgPolicyPolicyTimeoutsOutputReference <a name="GoogleOrgPolicyPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_org_policy_policy

googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleOrgPolicyPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrgPolicyPolicy.GoogleOrgPolicyPolicyTimeouts">GoogleOrgPolicyPolicyTimeouts</a>]

---



