# `googleIamDenyPolicy` Submodule <a name="`googleIamDenyPolicy` Submodule" id="@cdktf/provider-google-beta.googleIamDenyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamDenyPolicy <a name="GoogleIamDenyPolicy" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy google_iam_deny_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicy(
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
  rules: typing.Union[IResolvable, typing.List[GoogleIamDenyPolicyRules]],
  display_name: str = None,
  id: str = None,
  timeouts: GoogleIamDenyPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#id GoogleIamDenyPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.name"></a>

- *Type:* str

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#name GoogleIamDenyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.parent"></a>

- *Type:* str

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#parent GoogleIamDenyPolicy#parent}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#rules GoogleIamDenyPolicy#rules}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#display_name GoogleIamDenyPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#id GoogleIamDenyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#timeouts GoogleIamDenyPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[GoogleIamDenyPolicyRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#create GoogleIamDenyPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#delete GoogleIamDenyPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#update GoogleIamDenyPolicy#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleIamDenyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleIamDenyPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIamDenyPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIamDenyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamDenyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList">GoogleIamDenyPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference">GoogleIamDenyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.rules"></a>

```python
rules: GoogleIamDenyPolicyRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList">GoogleIamDenyPolicyRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.timeouts"></a>

```python
timeouts: GoogleIamDenyPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference">GoogleIamDenyPolicyTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[GoogleIamDenyPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIamDenyPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamDenyPolicyConfig <a name="GoogleIamDenyPolicyConfig" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  rules: typing.Union[IResolvable, typing.List[GoogleIamDenyPolicyRules]],
  display_name: str = None,
  id: str = None,
  timeouts: GoogleIamDenyPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.name">name</a></code> | <code>str</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.parent">parent</a></code> | <code>str</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#id GoogleIamDenyPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#name GoogleIamDenyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#parent GoogleIamDenyPolicy#parent}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[GoogleIamDenyPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#rules GoogleIamDenyPolicy#rules}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#display_name GoogleIamDenyPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#id GoogleIamDenyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleIamDenyPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#timeouts GoogleIamDenyPolicy#timeouts}

---

### GoogleIamDenyPolicyRules <a name="GoogleIamDenyPolicyRules" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicyRules(
  deny_rule: GoogleIamDenyPolicyRulesDenyRule = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.property.denyRule">deny_rule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a></code> | deny_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.property.description">description</a></code> | <code>str</code> | The description of the rule. |

---

##### `deny_rule`<sup>Optional</sup> <a name="deny_rule" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.property.denyRule"></a>

```python
deny_rule: GoogleIamDenyPolicyRulesDenyRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a>

deny_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#deny_rule GoogleIamDenyPolicy#deny_rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#description GoogleIamDenyPolicy#description}

---

### GoogleIamDenyPolicyRulesDenyRule <a name="GoogleIamDenyPolicyRulesDenyRule" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule(
  denial_condition: GoogleIamDenyPolicyRulesDenyRuleDenialCondition = None,
  denied_permissions: typing.List[str] = None,
  denied_principals: typing.List[str] = None,
  exception_permissions: typing.List[str] = None,
  exception_principals: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.denialCondition">denial_condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a></code> | denial_condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.deniedPermissions">denied_permissions</a></code> | <code>typing.List[str]</code> | The permissions that are explicitly denied by this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.deniedPrincipals">denied_principals</a></code> | <code>typing.List[str]</code> | The identities that are prevented from using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.exceptionPermissions">exception_permissions</a></code> | <code>typing.List[str]</code> | Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.exceptionPrincipals">exception_principals</a></code> | <code>typing.List[str]</code> | The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals. |

---

##### `denial_condition`<sup>Optional</sup> <a name="denial_condition" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.denialCondition"></a>

```python
denial_condition: GoogleIamDenyPolicyRulesDenyRuleDenialCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a>

denial_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#denial_condition GoogleIamDenyPolicy#denial_condition}

---

##### `denied_permissions`<sup>Optional</sup> <a name="denied_permissions" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.deniedPermissions"></a>

```python
denied_permissions: typing.List[str]
```

- *Type:* typing.List[str]

The permissions that are explicitly denied by this rule.

Each permission uses the format '{service-fqdn}/{resource}.{verb}',
where '{service-fqdn}' is the fully qualified domain name for the service. For example, 'iam.googleapis.com/roles.list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#denied_permissions GoogleIamDenyPolicy#denied_permissions}

---

##### `denied_principals`<sup>Optional</sup> <a name="denied_principals" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.deniedPrincipals"></a>

```python
denied_principals: typing.List[str]
```

- *Type:* typing.List[str]

The identities that are prevented from using one or more permissions on Google Cloud resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#denied_principals GoogleIamDenyPolicy#denied_principals}

---

##### `exception_permissions`<sup>Optional</sup> <a name="exception_permissions" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.exceptionPermissions"></a>

```python
exception_permissions: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions.

If a permission appears in deniedPermissions and in exceptionPermissions then it will not be denied.
The excluded permissions can be specified using the same syntax as deniedPermissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#exception_permissions GoogleIamDenyPolicy#exception_permissions}

---

##### `exception_principals`<sup>Optional</sup> <a name="exception_principals" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.exceptionPrincipals"></a>

```python
exception_principals: typing.List[str]
```

- *Type:* typing.List[str]

The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals.

For example, you could add a Google group to the deniedPrincipals, then exclude specific users who belong to that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#exception_principals GoogleIamDenyPolicy#exception_principals}

---

### GoogleIamDenyPolicyRulesDenyRuleDenialCondition <a name="GoogleIamDenyPolicyRulesDenyRuleDenialCondition" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#expression GoogleIamDenyPolicy#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#description GoogleIamDenyPolicy#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#location GoogleIamDenyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#title GoogleIamDenyPolicy#title}

---

### GoogleIamDenyPolicyTimeouts <a name="GoogleIamDenyPolicyTimeouts" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#create GoogleIamDenyPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#delete GoogleIamDenyPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#update GoogleIamDenyPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#create GoogleIamDenyPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#delete GoogleIamDenyPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#update GoogleIamDenyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference <a name="GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIamDenyPolicyRulesDenyRuleDenialCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a>

---


### GoogleIamDenyPolicyRulesDenyRuleOutputReference <a name="GoogleIamDenyPolicyRulesDenyRuleOutputReference" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition">put_denial_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDenialCondition">reset_denial_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPermissions">reset_denied_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPrincipals">reset_denied_principals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPermissions">reset_exception_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPrincipals">reset_exception_principals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_denial_condition` <a name="put_denial_condition" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition"></a>

```python
def put_denial_condition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#expression GoogleIamDenyPolicy#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#description GoogleIamDenyPolicy#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#location GoogleIamDenyPolicy#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#title GoogleIamDenyPolicy#title}

---

##### `reset_denial_condition` <a name="reset_denial_condition" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDenialCondition"></a>

```python
def reset_denial_condition() -> None
```

##### `reset_denied_permissions` <a name="reset_denied_permissions" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPermissions"></a>

```python
def reset_denied_permissions() -> None
```

##### `reset_denied_principals` <a name="reset_denied_principals" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPrincipals"></a>

```python
def reset_denied_principals() -> None
```

##### `reset_exception_permissions` <a name="reset_exception_permissions" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPermissions"></a>

```python
def reset_exception_permissions() -> None
```

##### `reset_exception_principals` <a name="reset_exception_principals" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPrincipals"></a>

```python
def reset_exception_principals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.denialCondition">denial_condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference">GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.denialConditionInput">denial_condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissionsInput">denied_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipalsInput">denied_principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissionsInput">exception_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipalsInput">exception_principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissions">denied_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipals">denied_principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissions">exception_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipals">exception_principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `denial_condition`<sup>Required</sup> <a name="denial_condition" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.denialCondition"></a>

```python
denial_condition: GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference">GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference</a>

---

##### `denial_condition_input`<sup>Optional</sup> <a name="denial_condition_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.denialConditionInput"></a>

```python
denial_condition_input: GoogleIamDenyPolicyRulesDenyRuleDenialCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a>

---

##### `denied_permissions_input`<sup>Optional</sup> <a name="denied_permissions_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissionsInput"></a>

```python
denied_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_principals_input`<sup>Optional</sup> <a name="denied_principals_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipalsInput"></a>

```python
denied_principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exception_permissions_input`<sup>Optional</sup> <a name="exception_permissions_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissionsInput"></a>

```python
exception_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exception_principals_input`<sup>Optional</sup> <a name="exception_principals_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipalsInput"></a>

```python
exception_principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_permissions`<sup>Required</sup> <a name="denied_permissions" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissions"></a>

```python
denied_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_principals`<sup>Required</sup> <a name="denied_principals" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipals"></a>

```python
denied_principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exception_permissions`<sup>Required</sup> <a name="exception_permissions" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissions"></a>

```python
exception_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exception_principals`<sup>Required</sup> <a name="exception_principals" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipals"></a>

```python
exception_principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIamDenyPolicyRulesDenyRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a>

---


### GoogleIamDenyPolicyRulesList <a name="GoogleIamDenyPolicyRulesList" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleIamDenyPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleIamDenyPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>]]

---


### GoogleIamDenyPolicyRulesOutputReference <a name="GoogleIamDenyPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.putDenyRule">put_deny_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resetDenyRule">reset_deny_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_deny_rule` <a name="put_deny_rule" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.putDenyRule"></a>

```python
def put_deny_rule(
  denial_condition: GoogleIamDenyPolicyRulesDenyRuleDenialCondition = None,
  denied_permissions: typing.List[str] = None,
  denied_principals: typing.List[str] = None,
  exception_permissions: typing.List[str] = None,
  exception_principals: typing.List[str] = None
) -> None
```

###### `denial_condition`<sup>Optional</sup> <a name="denial_condition" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.putDenyRule.parameter.denialCondition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a>

denial_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#denial_condition GoogleIamDenyPolicy#denial_condition}

---

###### `denied_permissions`<sup>Optional</sup> <a name="denied_permissions" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.putDenyRule.parameter.deniedPermissions"></a>

- *Type:* typing.List[str]

The permissions that are explicitly denied by this rule.

Each permission uses the format '{service-fqdn}/{resource}.{verb}',
where '{service-fqdn}' is the fully qualified domain name for the service. For example, 'iam.googleapis.com/roles.list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#denied_permissions GoogleIamDenyPolicy#denied_permissions}

---

###### `denied_principals`<sup>Optional</sup> <a name="denied_principals" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.putDenyRule.parameter.deniedPrincipals"></a>

- *Type:* typing.List[str]

The identities that are prevented from using one or more permissions on Google Cloud resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#denied_principals GoogleIamDenyPolicy#denied_principals}

---

###### `exception_permissions`<sup>Optional</sup> <a name="exception_permissions" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.putDenyRule.parameter.exceptionPermissions"></a>

- *Type:* typing.List[str]

Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions.

If a permission appears in deniedPermissions and in exceptionPermissions then it will not be denied.
The excluded permissions can be specified using the same syntax as deniedPermissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#exception_permissions GoogleIamDenyPolicy#exception_permissions}

---

###### `exception_principals`<sup>Optional</sup> <a name="exception_principals" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.putDenyRule.parameter.exceptionPrincipals"></a>

- *Type:* typing.List[str]

The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals.

For example, you could add a Google group to the deniedPrincipals, then exclude specific users who belong to that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_deny_policy#exception_principals GoogleIamDenyPolicy#exception_principals}

---

##### `reset_deny_rule` <a name="reset_deny_rule" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resetDenyRule"></a>

```python
def reset_deny_rule() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.denyRule">deny_rule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference">GoogleIamDenyPolicyRulesDenyRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.denyRuleInput">deny_rule_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deny_rule`<sup>Required</sup> <a name="deny_rule" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.denyRule"></a>

```python
deny_rule: GoogleIamDenyPolicyRulesDenyRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference">GoogleIamDenyPolicyRulesDenyRuleOutputReference</a>

---

##### `deny_rule_input`<sup>Optional</sup> <a name="deny_rule_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.denyRuleInput"></a>

```python
deny_rule_input: GoogleIamDenyPolicyRulesDenyRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIamDenyPolicyRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>]

---


### GoogleIamDenyPolicyTimeoutsOutputReference <a name="GoogleIamDenyPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_deny_policy

googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIamDenyPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a>]

---



