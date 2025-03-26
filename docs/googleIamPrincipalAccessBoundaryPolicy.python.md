# `googleIamPrincipalAccessBoundaryPolicy` Submodule <a name="`googleIamPrincipalAccessBoundaryPolicy` Submodule" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamPrincipalAccessBoundaryPolicy <a name="GoogleIamPrincipalAccessBoundaryPolicy" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy google_iam_principal_access_boundary_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_principal_access_boundary_policy

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy(
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
  organization: str,
  principal_access_boundary_policy_id: str,
  annotations: typing.Mapping[str] = None,
  details: GoogleIamPrincipalAccessBoundaryPolicyDetails = None,
  display_name: str = None,
  id: str = None,
  timeouts: GoogleIamPrincipalAccessBoundaryPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | The location the principal access boundary policy is in. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The parent organization of the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.principalAccessBoundaryPolicyId">principal_access_boundary_policy_id</a></code> | <code>str</code> | The ID to use to create the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.details">details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The description of the principal access boundary policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#id GoogleIamPrincipalAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.location"></a>

- *Type:* str

The location the principal access boundary policy is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#location GoogleIamPrincipalAccessBoundaryPolicy#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.organization"></a>

- *Type:* str

The parent organization of the principal access boundary policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#organization GoogleIamPrincipalAccessBoundaryPolicy#organization}

---

##### `principal_access_boundary_policy_id`<sup>Required</sup> <a name="principal_access_boundary_policy_id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.principalAccessBoundaryPolicyId"></a>

- *Type:* str

The ID to use to create the principal access boundary policy.

This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, hyphens, or dots. Pattern, /a-z{2,62}/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#principal_access_boundary_policy_id GoogleIamPrincipalAccessBoundaryPolicy#principal_access_boundary_policy_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#annotations GoogleIamPrincipalAccessBoundaryPolicy#annotations}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.details"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#details GoogleIamPrincipalAccessBoundaryPolicy#details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

The description of the principal access boundary policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#display_name GoogleIamPrincipalAccessBoundaryPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#id GoogleIamPrincipalAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#timeouts GoogleIamPrincipalAccessBoundaryPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putDetails">put_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDetails">reset_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_details` <a name="put_details" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putDetails"></a>

```python
def put_details(
  rules: typing.Union[IResolvable, typing.List[GoogleIamPrincipalAccessBoundaryPolicyDetailsRules]],
  enforcement_version: str = None
) -> None
```

###### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putDetails.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#rules GoogleIamPrincipalAccessBoundaryPolicy#rules}

---

###### `enforcement_version`<sup>Optional</sup> <a name="enforcement_version" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putDetails.parameter.enforcementVersion"></a>

- *Type:* str

The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#enforcement_version GoogleIamPrincipalAccessBoundaryPolicy#enforcement_version}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#create GoogleIamPrincipalAccessBoundaryPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#delete GoogleIamPrincipalAccessBoundaryPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#update GoogleIamPrincipalAccessBoundaryPolicy#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_details` <a name="reset_details" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDetails"></a>

```python
def reset_details() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleIamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_principal_access_boundary_policy

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_principal_access_boundary_policy

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_principal_access_boundary_policy

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_principal_access_boundary_policy

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleIamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIamPrincipalAccessBoundaryPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIamPrincipalAccessBoundaryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamPrincipalAccessBoundaryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.details">details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.detailsInput">details_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput">principal_access_boundary_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId">principal_access_boundary_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.details"></a>

```python
details: GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeouts"></a>

```python
timeouts: GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `details_input`<sup>Optional</sup> <a name="details_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.detailsInput"></a>

```python
details_input: GoogleIamPrincipalAccessBoundaryPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `principal_access_boundary_policy_id_input`<sup>Optional</sup> <a name="principal_access_boundary_policy_id_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput"></a>

```python
principal_access_boundary_policy_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIamPrincipalAccessBoundaryPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `principal_access_boundary_policy_id`<sup>Required</sup> <a name="principal_access_boundary_policy_id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId"></a>

```python
principal_access_boundary_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamPrincipalAccessBoundaryPolicyConfig <a name="GoogleIamPrincipalAccessBoundaryPolicyConfig" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_principal_access_boundary_policy

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  organization: str,
  principal_access_boundary_policy_id: str,
  annotations: typing.Mapping[str] = None,
  details: GoogleIamPrincipalAccessBoundaryPolicyDetails = None,
  display_name: str = None,
  id: str = None,
  timeouts: GoogleIamPrincipalAccessBoundaryPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.location">location</a></code> | <code>str</code> | The location the principal access boundary policy is in. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.organization">organization</a></code> | <code>str</code> | The parent organization of the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId">principal_access_boundary_policy_id</a></code> | <code>str</code> | The ID to use to create the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.details">details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | The description of the principal access boundary policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#id GoogleIamPrincipalAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location the principal access boundary policy is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#location GoogleIamPrincipalAccessBoundaryPolicy#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The parent organization of the principal access boundary policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#organization GoogleIamPrincipalAccessBoundaryPolicy#organization}

---

##### `principal_access_boundary_policy_id`<sup>Required</sup> <a name="principal_access_boundary_policy_id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId"></a>

```python
principal_access_boundary_policy_id: str
```

- *Type:* str

The ID to use to create the principal access boundary policy.

This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, hyphens, or dots. Pattern, /a-z{2,62}/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#principal_access_boundary_policy_id GoogleIamPrincipalAccessBoundaryPolicy#principal_access_boundary_policy_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#annotations GoogleIamPrincipalAccessBoundaryPolicy#annotations}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.details"></a>

```python
details: GoogleIamPrincipalAccessBoundaryPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#details GoogleIamPrincipalAccessBoundaryPolicy#details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The description of the principal access boundary policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#display_name GoogleIamPrincipalAccessBoundaryPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#id GoogleIamPrincipalAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleIamPrincipalAccessBoundaryPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#timeouts GoogleIamPrincipalAccessBoundaryPolicy#timeouts}

---

### GoogleIamPrincipalAccessBoundaryPolicyDetails <a name="GoogleIamPrincipalAccessBoundaryPolicyDetails" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_principal_access_boundary_policy

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails(
  rules: typing.Union[IResolvable, typing.List[GoogleIamPrincipalAccessBoundaryPolicyDetailsRules]],
  enforcement_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion">enforcement_version</a></code> | <code>str</code> | The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[GoogleIamPrincipalAccessBoundaryPolicyDetailsRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#rules GoogleIamPrincipalAccessBoundaryPolicy#rules}

---

##### `enforcement_version`<sup>Optional</sup> <a name="enforcement_version" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion"></a>

```python
enforcement_version: str
```

- *Type:* str

The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#enforcement_version GoogleIamPrincipalAccessBoundaryPolicy#enforcement_version}

---

### GoogleIamPrincipalAccessBoundaryPolicyDetailsRules <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsRules" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_principal_access_boundary_policy

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules(
  effect: str,
  resources: typing.List[str],
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.effect">effect</a></code> | <code>str</code> | The access relationship of principals to the resources in this rule. Possible values: ALLOW. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.resources">resources</a></code> | <code>typing.List[str]</code> | A list of Cloud Resource Manager resources. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.description">description</a></code> | <code>str</code> | The description of the principal access boundary policy rule. Must be less than or equal to 256 characters. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.effect"></a>

```python
effect: str
```

- *Type:* str

The access relationship of principals to the resources in this rule. Possible values: ALLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#effect GoogleIamPrincipalAccessBoundaryPolicy#effect}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

A list of Cloud Resource Manager resources.

The resource
and all the descendants are included. The number of resources in a policy
is limited to 500 across all rules.
The following resource types are supported:

* Organizations, such as '//cloudresourcemanager.googleapis.com/organizations/123'.
* Folders, such as '//cloudresourcemanager.googleapis.com/folders/123'.
* Projects, such as '//cloudresourcemanager.googleapis.com/projects/123'
  or '//cloudresourcemanager.googleapis.com/projects/my-project-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#resources GoogleIamPrincipalAccessBoundaryPolicy#resources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the principal access boundary policy rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#description GoogleIamPrincipalAccessBoundaryPolicy#description}

---

### GoogleIamPrincipalAccessBoundaryPolicyTimeouts <a name="GoogleIamPrincipalAccessBoundaryPolicyTimeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_principal_access_boundary_policy

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#create GoogleIamPrincipalAccessBoundaryPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#delete GoogleIamPrincipalAccessBoundaryPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#update GoogleIamPrincipalAccessBoundaryPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#create GoogleIamPrincipalAccessBoundaryPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#delete GoogleIamPrincipalAccessBoundaryPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_iam_principal_access_boundary_policy#update GoogleIamPrincipalAccessBoundaryPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_principal_access_boundary_policy

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion">reset_enforcement_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[GoogleIamPrincipalAccessBoundaryPolicyDetailsRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>]]

---

##### `reset_enforcement_version` <a name="reset_enforcement_version" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion"></a>

```python
def reset_enforcement_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList">GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput">enforcement_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion">enforcement_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules"></a>

```python
rules: GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList">GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList</a>

---

##### `enforcement_version_input`<sup>Optional</sup> <a name="enforcement_version_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput"></a>

```python
enforcement_version_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[GoogleIamPrincipalAccessBoundaryPolicyDetailsRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>]]

---

##### `enforcement_version`<sup>Required</sup> <a name="enforcement_version" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion"></a>

```python
enforcement_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIamPrincipalAccessBoundaryPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

---


### GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_principal_access_boundary_policy

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleIamPrincipalAccessBoundaryPolicyDetailsRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>]]

---


### GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_principal_access_boundary_policy

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIamPrincipalAccessBoundaryPolicyDetailsRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>]

---


### GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference <a name="GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_principal_access_boundary_policy

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIamPrincipalAccessBoundaryPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>]

---



