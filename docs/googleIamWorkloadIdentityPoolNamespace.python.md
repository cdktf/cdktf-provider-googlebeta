# `googleIamWorkloadIdentityPoolNamespace` Submodule <a name="`googleIamWorkloadIdentityPoolNamespace` Submodule" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkloadIdentityPoolNamespace <a name="GoogleIamWorkloadIdentityPoolNamespace" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace google_iam_workload_identity_pool_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_namespace

googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workload_identity_pool_id: str,
  workload_identity_pool_namespace_id: str,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleIamWorkloadIdentityPoolNamespaceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.workloadIdentityPoolNamespaceId">workload_identity_pool_namespace_id</a></code> | <code>str</code> | The ID to use for the namespace. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the namespace. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the namespace is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#id GoogleIamWorkloadIdentityPoolNamespace#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#project GoogleIamWorkloadIdentityPoolNamespace#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.workloadIdentityPoolId"></a>

- *Type:* str

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#workload_identity_pool_id GoogleIamWorkloadIdentityPoolNamespace#workload_identity_pool_id}

---

##### `workload_identity_pool_namespace_id`<sup>Required</sup> <a name="workload_identity_pool_namespace_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.workloadIdentityPoolNamespaceId"></a>

- *Type:* str

The ID to use for the namespace.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#workload_identity_pool_namespace_id GoogleIamWorkloadIdentityPoolNamespace#workload_identity_pool_namespace_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.description"></a>

- *Type:* str

A description of the namespace. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#description GoogleIamWorkloadIdentityPoolNamespace#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the namespace is disabled.

If disabled, credentials may no longer be issued for
identities within this namespace, however existing credentials will still be accepted until
they expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#disabled GoogleIamWorkloadIdentityPoolNamespace#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#id GoogleIamWorkloadIdentityPoolNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#project GoogleIamWorkloadIdentityPoolNamespace#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#timeouts GoogleIamWorkloadIdentityPoolNamespace#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#create GoogleIamWorkloadIdentityPoolNamespace#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#delete GoogleIamWorkloadIdentityPoolNamespace#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#update GoogleIamWorkloadIdentityPoolNamespace#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_namespace

googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_namespace

googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_namespace

googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_namespace

googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIamWorkloadIdentityPoolNamespace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIamWorkloadIdentityPoolNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkloadIdentityPoolNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.ownerService">owner_service</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList">GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolIdInput">workload_identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceIdInput">workload_identity_pool_namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceId">workload_identity_pool_namespace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner_service`<sup>Required</sup> <a name="owner_service" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.ownerService"></a>

```python
owner_service: GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList">GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.timeouts"></a>

```python
timeouts: GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIamWorkloadIdentityPoolNamespaceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a>]

---

##### `workload_identity_pool_id_input`<sup>Optional</sup> <a name="workload_identity_pool_id_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolIdInput"></a>

```python
workload_identity_pool_id_input: str
```

- *Type:* str

---

##### `workload_identity_pool_namespace_id_input`<sup>Optional</sup> <a name="workload_identity_pool_namespace_id_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceIdInput"></a>

```python
workload_identity_pool_namespace_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolId"></a>

```python
workload_identity_pool_id: str
```

- *Type:* str

---

##### `workload_identity_pool_namespace_id`<sup>Required</sup> <a name="workload_identity_pool_namespace_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceId"></a>

```python
workload_identity_pool_namespace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkloadIdentityPoolNamespaceConfig <a name="GoogleIamWorkloadIdentityPoolNamespaceConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_namespace

googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workload_identity_pool_id: str,
  workload_identity_pool_namespace_id: str,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleIamWorkloadIdentityPoolNamespaceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolNamespaceId">workload_identity_pool_namespace_id</a></code> | <code>str</code> | The ID to use for the namespace. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.description">description</a></code> | <code>str</code> | A description of the namespace. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the namespace is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#id GoogleIamWorkloadIdentityPoolNamespace#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#project GoogleIamWorkloadIdentityPoolNamespace#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolId"></a>

```python
workload_identity_pool_id: str
```

- *Type:* str

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#workload_identity_pool_id GoogleIamWorkloadIdentityPoolNamespace#workload_identity_pool_id}

---

##### `workload_identity_pool_namespace_id`<sup>Required</sup> <a name="workload_identity_pool_namespace_id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolNamespaceId"></a>

```python
workload_identity_pool_namespace_id: str
```

- *Type:* str

The ID to use for the namespace.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#workload_identity_pool_namespace_id GoogleIamWorkloadIdentityPoolNamespace#workload_identity_pool_namespace_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the namespace. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#description GoogleIamWorkloadIdentityPoolNamespace#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the namespace is disabled.

If disabled, credentials may no longer be issued for
identities within this namespace, however existing credentials will still be accepted until
they expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#disabled GoogleIamWorkloadIdentityPoolNamespace#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#id GoogleIamWorkloadIdentityPoolNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#project GoogleIamWorkloadIdentityPoolNamespace#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceConfig.property.timeouts"></a>

```python
timeouts: GoogleIamWorkloadIdentityPoolNamespaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#timeouts GoogleIamWorkloadIdentityPoolNamespace#timeouts}

---

### GoogleIamWorkloadIdentityPoolNamespaceOwnerService <a name="GoogleIamWorkloadIdentityPoolNamespaceOwnerService" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerService.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_namespace

googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerService()
```


### GoogleIamWorkloadIdentityPoolNamespaceTimeouts <a name="GoogleIamWorkloadIdentityPoolNamespaceTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_namespace

googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#create GoogleIamWorkloadIdentityPoolNamespace#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#delete GoogleIamWorkloadIdentityPoolNamespace#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#update GoogleIamWorkloadIdentityPoolNamespace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#create GoogleIamWorkloadIdentityPoolNamespace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#delete GoogleIamWorkloadIdentityPoolNamespace#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.43.0/docs/resources/google_iam_workload_identity_pool_namespace#update GoogleIamWorkloadIdentityPoolNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList <a name="GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_namespace

googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference <a name="GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_namespace

googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.principalSubject">principal_subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerService">GoogleIamWorkloadIdentityPoolNamespaceOwnerService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_subject`<sup>Required</sup> <a name="principal_subject" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.principalSubject"></a>

```python
principal_subject: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIamWorkloadIdentityPoolNamespaceOwnerService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceOwnerService">GoogleIamWorkloadIdentityPoolNamespaceOwnerService</a>

---


### GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference <a name="GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_workload_identity_pool_namespace

googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIamWorkloadIdentityPoolNamespaceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolNamespace.GoogleIamWorkloadIdentityPoolNamespaceTimeouts">GoogleIamWorkloadIdentityPoolNamespaceTimeouts</a>]

---



