# `googleOrganizationIamCustomRole` Submodule <a name="`googleOrganizationIamCustomRole` Submodule" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrganizationIamCustomRole <a name="GoogleOrganizationIamCustomRole" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role google_organization_iam_custom_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_iam_custom_role

googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  org_id: str,
  permissions: typing.List[str],
  role_id: str,
  title: str,
  description: str = None,
  id: str = None,
  stage: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The numeric ID of the organization in which you want to create a custom role. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.permissions">permissions</a></code> | <code>typing.List[str]</code> | The names of the permissions this role grants when bound in an IAM policy. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.roleId">role_id</a></code> | <code>str</code> | The role id to use for this role. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.title">title</a></code> | <code>str</code> | A human-readable title for the role. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description for the role. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#id GoogleOrganizationIamCustomRole#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.stage">stage</a></code> | <code>str</code> | The current launch stage of the role. Defaults to GA. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.orgId"></a>

- *Type:* str

The numeric ID of the organization in which you want to create a custom role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#org_id GoogleOrganizationIamCustomRole#org_id}

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.permissions"></a>

- *Type:* typing.List[str]

The names of the permissions this role grants when bound in an IAM policy.

At least one permission must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#permissions GoogleOrganizationIamCustomRole#permissions}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.roleId"></a>

- *Type:* str

The role id to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#role_id GoogleOrganizationIamCustomRole#role_id}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.title"></a>

- *Type:* str

A human-readable title for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#title GoogleOrganizationIamCustomRole#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#description GoogleOrganizationIamCustomRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#id GoogleOrganizationIamCustomRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.stage"></a>

- *Type:* str

The current launch stage of the role. Defaults to GA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#stage GoogleOrganizationIamCustomRole#stage}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetStage">reset_stage</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_stage` <a name="reset_stage" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetStage"></a>

```python
def reset_stage() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleOrganizationIamCustomRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_iam_custom_role

googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_iam_custom_role

googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_iam_custom_role

googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_iam_custom_role

googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleOrganizationIamCustomRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleOrganizationIamCustomRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleOrganizationIamCustomRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOrganizationIamCustomRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.deleted">deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.title">title</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.deleted"></a>

```python
deleted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.title"></a>

```python
title: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrganizationIamCustomRoleConfig <a name="GoogleOrganizationIamCustomRoleConfig" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_iam_custom_role

googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  org_id: str,
  permissions: typing.List[str],
  role_id: str,
  title: str,
  description: str = None,
  id: str = None,
  stage: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.orgId">org_id</a></code> | <code>str</code> | The numeric ID of the organization in which you want to create a custom role. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | The names of the permissions this role grants when bound in an IAM policy. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.roleId">role_id</a></code> | <code>str</code> | The role id to use for this role. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.title">title</a></code> | <code>str</code> | A human-readable title for the role. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.description">description</a></code> | <code>str</code> | A human-readable description for the role. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#id GoogleOrganizationIamCustomRole#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.stage">stage</a></code> | <code>str</code> | The current launch stage of the role. Defaults to GA. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The numeric ID of the organization in which you want to create a custom role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#org_id GoogleOrganizationIamCustomRole#org_id}

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

The names of the permissions this role grants when bound in an IAM policy.

At least one permission must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#permissions GoogleOrganizationIamCustomRole#permissions}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

The role id to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#role_id GoogleOrganizationIamCustomRole#role_id}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.title"></a>

```python
title: str
```

- *Type:* str

A human-readable title for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#title GoogleOrganizationIamCustomRole#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#description GoogleOrganizationIamCustomRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#id GoogleOrganizationIamCustomRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.stage"></a>

```python
stage: str
```

- *Type:* str

The current launch stage of the role. Defaults to GA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#stage GoogleOrganizationIamCustomRole#stage}

---



