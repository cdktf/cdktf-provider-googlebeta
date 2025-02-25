# `googleIamOrganizationsPolicyBinding` Submodule <a name="`googleIamOrganizationsPolicyBinding` Submodule" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamOrganizationsPolicyBinding <a name="GoogleIamOrganizationsPolicyBinding" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding google_iam_organizations_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_organizations_policy_binding

googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding(
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
  policy: str,
  policy_binding_id: str,
  target: GoogleIamOrganizationsPolicyBindingTarget,
  annotations: typing.Mapping[str] = None,
  condition: GoogleIamOrganizationsPolicyBindingCondition = None,
  display_name: str = None,
  id: str = None,
  policy_kind: str = None,
  timeouts: GoogleIamOrganizationsPolicyBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The parent organization of the Policy Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.policyBindingId">policy_binding_id</a></code> | <code>str</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#id GoogleIamOrganizationsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.policyKind">policy_kind</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.location"></a>

- *Type:* str

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#location GoogleIamOrganizationsPolicyBinding#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.organization"></a>

- *Type:* str

The parent organization of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#organization GoogleIamOrganizationsPolicyBinding#organization}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.policy"></a>

- *Type:* str

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#policy GoogleIamOrganizationsPolicyBinding#policy}

---

##### `policy_binding_id`<sup>Required</sup> <a name="policy_binding_id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.policyBindingId"></a>

- *Type:* str

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#policy_binding_id GoogleIamOrganizationsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#target GoogleIamOrganizationsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#annotations GoogleIamOrganizationsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#condition GoogleIamOrganizationsPolicyBinding#condition}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#display_name GoogleIamOrganizationsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#id GoogleIamOrganizationsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_kind`<sup>Optional</sup> <a name="policy_kind" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.policyKind"></a>

- *Type:* str

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#policy_kind GoogleIamOrganizationsPolicyBinding#policy_kind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#timeouts GoogleIamOrganizationsPolicyBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetPolicyKind">reset_policy_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition"></a>

```python
def put_condition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition.parameter.description"></a>

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#description GoogleIamOrganizationsPolicyBinding#description}

---

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#expression GoogleIamOrganizationsPolicyBinding#expression}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition.parameter.location"></a>

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#location GoogleIamOrganizationsPolicyBinding#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putCondition.parameter.title"></a>

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#title GoogleIamOrganizationsPolicyBinding#title}

---

##### `put_target` <a name="put_target" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTarget"></a>

```python
def put_target(
  principal_set: str = None
) -> None
```

###### `principal_set`<sup>Optional</sup> <a name="principal_set" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTarget.parameter.principalSet"></a>

- *Type:* str

Required.

Immutable. The resource name of the policy to be bound.
The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#principal_set GoogleIamOrganizationsPolicyBinding#principal_set}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#create GoogleIamOrganizationsPolicyBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#delete GoogleIamOrganizationsPolicyBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#update GoogleIamOrganizationsPolicyBinding#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_kind` <a name="reset_policy_kind" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetPolicyKind"></a>

```python
def reset_policy_kind() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleIamOrganizationsPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_organizations_policy_binding

googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_organizations_policy_binding

googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_organizations_policy_binding

googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_organizations_policy_binding

googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleIamOrganizationsPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIamOrganizationsPolicyBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIamOrganizationsPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamOrganizationsPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference">GoogleIamOrganizationsPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyUid">policy_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference">GoogleIamOrganizationsPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference">GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingIdInput">policy_binding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKindInput">policy_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.targetInput">target_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingId">policy_binding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKind">policy_kind</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.condition"></a>

```python
condition: GoogleIamOrganizationsPolicyBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference">GoogleIamOrganizationsPolicyBindingConditionOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_uid`<sup>Required</sup> <a name="policy_uid" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyUid"></a>

```python
policy_uid: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.target"></a>

```python
target: GoogleIamOrganizationsPolicyBindingTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference">GoogleIamOrganizationsPolicyBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeouts"></a>

```python
timeouts: GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference">GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.conditionInput"></a>

```python
condition_input: GoogleIamOrganizationsPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `policy_binding_id_input`<sup>Optional</sup> <a name="policy_binding_id_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingIdInput"></a>

```python
policy_binding_id_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `policy_kind_input`<sup>Optional</sup> <a name="policy_kind_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKindInput"></a>

```python
policy_kind_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.targetInput"></a>

```python
target_input: GoogleIamOrganizationsPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIamOrganizationsPolicyBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `policy_binding_id`<sup>Required</sup> <a name="policy_binding_id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyBindingId"></a>

```python
policy_binding_id: str
```

- *Type:* str

---

##### `policy_kind`<sup>Required</sup> <a name="policy_kind" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.policyKind"></a>

```python
policy_kind: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamOrganizationsPolicyBindingCondition <a name="GoogleIamOrganizationsPolicyBindingCondition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_organizations_policy_binding

googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.description">description</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.location">location</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.title">title</a></code> | <code>str</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#description GoogleIamOrganizationsPolicyBinding#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#expression GoogleIamOrganizationsPolicyBinding#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.location"></a>

```python
location: str
```

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#location GoogleIamOrganizationsPolicyBinding#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#title GoogleIamOrganizationsPolicyBinding#title}

---

### GoogleIamOrganizationsPolicyBindingConfig <a name="GoogleIamOrganizationsPolicyBindingConfig" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_organizations_policy_binding

googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  organization: str,
  policy: str,
  policy_binding_id: str,
  target: GoogleIamOrganizationsPolicyBindingTarget,
  annotations: typing.Mapping[str] = None,
  condition: GoogleIamOrganizationsPolicyBindingCondition = None,
  display_name: str = None,
  id: str = None,
  policy_kind: str = None,
  timeouts: GoogleIamOrganizationsPolicyBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.location">location</a></code> | <code>str</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.organization">organization</a></code> | <code>str</code> | The parent organization of the Policy Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policy">policy</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyBindingId">policy_binding_id</a></code> | <code>str</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#id GoogleIamOrganizationsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyKind">policy_kind</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#location GoogleIamOrganizationsPolicyBinding#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The parent organization of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#organization GoogleIamOrganizationsPolicyBinding#organization}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#policy GoogleIamOrganizationsPolicyBinding#policy}

---

##### `policy_binding_id`<sup>Required</sup> <a name="policy_binding_id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyBindingId"></a>

```python
policy_binding_id: str
```

- *Type:* str

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#policy_binding_id GoogleIamOrganizationsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.target"></a>

```python
target: GoogleIamOrganizationsPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#target GoogleIamOrganizationsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#annotations GoogleIamOrganizationsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.condition"></a>

```python
condition: GoogleIamOrganizationsPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#condition GoogleIamOrganizationsPolicyBinding#condition}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#display_name GoogleIamOrganizationsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#id GoogleIamOrganizationsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_kind`<sup>Optional</sup> <a name="policy_kind" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.policyKind"></a>

```python
policy_kind: str
```

- *Type:* str

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#policy_kind GoogleIamOrganizationsPolicyBinding#policy_kind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConfig.property.timeouts"></a>

```python
timeouts: GoogleIamOrganizationsPolicyBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#timeouts GoogleIamOrganizationsPolicyBinding#timeouts}

---

### GoogleIamOrganizationsPolicyBindingTarget <a name="GoogleIamOrganizationsPolicyBindingTarget" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_organizations_policy_binding

googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget(
  principal_set: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget.property.principalSet">principal_set</a></code> | <code>str</code> | Required. |

---

##### `principal_set`<sup>Optional</sup> <a name="principal_set" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget.property.principalSet"></a>

```python
principal_set: str
```

- *Type:* str

Required.

Immutable. The resource name of the policy to be bound.
The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#principal_set GoogleIamOrganizationsPolicyBinding#principal_set}

---

### GoogleIamOrganizationsPolicyBindingTimeouts <a name="GoogleIamOrganizationsPolicyBindingTimeouts" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_organizations_policy_binding

googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#create GoogleIamOrganizationsPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#delete GoogleIamOrganizationsPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#update GoogleIamOrganizationsPolicyBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#create GoogleIamOrganizationsPolicyBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#delete GoogleIamOrganizationsPolicyBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_organizations_policy_binding#update GoogleIamOrganizationsPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamOrganizationsPolicyBindingConditionOutputReference <a name="GoogleIamOrganizationsPolicyBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_organizations_policy_binding

googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIamOrganizationsPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingCondition">GoogleIamOrganizationsPolicyBindingCondition</a>

---


### GoogleIamOrganizationsPolicyBindingTargetOutputReference <a name="GoogleIamOrganizationsPolicyBindingTargetOutputReference" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_organizations_policy_binding

googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resetPrincipalSet">reset_principal_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_principal_set` <a name="reset_principal_set" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```python
def reset_principal_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSetInput">principal_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSet">principal_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_set_input`<sup>Optional</sup> <a name="principal_set_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```python
principal_set_input: str
```

- *Type:* str

---

##### `principal_set`<sup>Required</sup> <a name="principal_set" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.principalSet"></a>

```python
principal_set: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTargetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIamOrganizationsPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTarget">GoogleIamOrganizationsPolicyBindingTarget</a>

---


### GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference <a name="GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_organizations_policy_binding

googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIamOrganizationsPolicyBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamOrganizationsPolicyBinding.GoogleIamOrganizationsPolicyBindingTimeouts">GoogleIamOrganizationsPolicyBindingTimeouts</a>]

---



