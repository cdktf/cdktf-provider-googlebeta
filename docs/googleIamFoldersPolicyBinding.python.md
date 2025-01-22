# `googleIamFoldersPolicyBinding` Submodule <a name="`googleIamFoldersPolicyBinding` Submodule" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamFoldersPolicyBinding <a name="GoogleIamFoldersPolicyBinding" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding google_iam_folders_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_folders_policy_binding

googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  folder: str,
  location: str,
  policy: str,
  policy_binding_id: str,
  target: GoogleIamFoldersPolicyBindingTarget,
  annotations: typing.Mapping[str] = None,
  condition: GoogleIamFoldersPolicyBindingCondition = None,
  display_name: str = None,
  id: str = None,
  policy_kind: str = None,
  timeouts: GoogleIamFoldersPolicyBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The parent folder for the PolicyBinding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the PolicyBinding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.policyBindingId">policy_binding_id</a></code> | <code>str</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#id GoogleIamFoldersPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.policyKind">policy_kind</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts">GoogleIamFoldersPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.folder"></a>

- *Type:* str

The parent folder for the PolicyBinding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#folder GoogleIamFoldersPolicyBinding#folder}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.location"></a>

- *Type:* str

The location of the PolicyBinding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#location GoogleIamFoldersPolicyBinding#location}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.policy"></a>

- *Type:* str

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#policy GoogleIamFoldersPolicyBinding#policy}

---

##### `policy_binding_id`<sup>Required</sup> <a name="policy_binding_id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.policyBindingId"></a>

- *Type:* str

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#policy_binding_id GoogleIamFoldersPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#target GoogleIamFoldersPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#annotations GoogleIamFoldersPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#condition GoogleIamFoldersPolicyBinding#condition}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#display_name GoogleIamFoldersPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#id GoogleIamFoldersPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_kind`<sup>Optional</sup> <a name="policy_kind" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.policyKind"></a>

- *Type:* str

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#policy_kind GoogleIamFoldersPolicyBinding#policy_kind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts">GoogleIamFoldersPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#timeouts GoogleIamFoldersPolicyBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetPolicyKind">reset_policy_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putCondition"></a>

```python
def put_condition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putCondition.parameter.description"></a>

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#description GoogleIamFoldersPolicyBinding#description}

---

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#expression GoogleIamFoldersPolicyBinding#expression}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putCondition.parameter.location"></a>

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#location GoogleIamFoldersPolicyBinding#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putCondition.parameter.title"></a>

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#title GoogleIamFoldersPolicyBinding#title}

---

##### `put_target` <a name="put_target" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putTarget"></a>

```python
def put_target(
  principal_set: str = None
) -> None
```

###### `principal_set`<sup>Optional</sup> <a name="principal_set" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putTarget.parameter.principalSet"></a>

- *Type:* str

Required.

Immutable. The resource name of the policy to be bound.
The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#principal_set GoogleIamFoldersPolicyBinding#principal_set}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#create GoogleIamFoldersPolicyBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#delete GoogleIamFoldersPolicyBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#update GoogleIamFoldersPolicyBinding#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_kind` <a name="reset_policy_kind" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetPolicyKind"></a>

```python
def reset_policy_kind() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleIamFoldersPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_folders_policy_binding

googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_folders_policy_binding

googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_folders_policy_binding

googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_folders_policy_binding

googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleIamFoldersPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIamFoldersPolicyBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIamFoldersPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamFoldersPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference">GoogleIamFoldersPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyUid">policy_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference">GoogleIamFoldersPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference">GoogleIamFoldersPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyBindingIdInput">policy_binding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyKindInput">policy_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.targetInput">target_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts">GoogleIamFoldersPolicyBindingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyBindingId">policy_binding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyKind">policy_kind</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.condition"></a>

```python
condition: GoogleIamFoldersPolicyBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference">GoogleIamFoldersPolicyBindingConditionOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_uid`<sup>Required</sup> <a name="policy_uid" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyUid"></a>

```python
policy_uid: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.target"></a>

```python
target: GoogleIamFoldersPolicyBindingTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference">GoogleIamFoldersPolicyBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.timeouts"></a>

```python
timeouts: GoogleIamFoldersPolicyBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference">GoogleIamFoldersPolicyBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.conditionInput"></a>

```python
condition_input: GoogleIamFoldersPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `policy_binding_id_input`<sup>Optional</sup> <a name="policy_binding_id_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyBindingIdInput"></a>

```python
policy_binding_id_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `policy_kind_input`<sup>Optional</sup> <a name="policy_kind_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyKindInput"></a>

```python
policy_kind_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.targetInput"></a>

```python
target_input: GoogleIamFoldersPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIamFoldersPolicyBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts">GoogleIamFoldersPolicyBindingTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `policy_binding_id`<sup>Required</sup> <a name="policy_binding_id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyBindingId"></a>

```python
policy_binding_id: str
```

- *Type:* str

---

##### `policy_kind`<sup>Required</sup> <a name="policy_kind" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.policyKind"></a>

```python
policy_kind: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamFoldersPolicyBindingCondition <a name="GoogleIamFoldersPolicyBindingCondition" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_folders_policy_binding

googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.description">description</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.location">location</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.title">title</a></code> | <code>str</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#description GoogleIamFoldersPolicyBinding#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#expression GoogleIamFoldersPolicyBinding#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.location"></a>

```python
location: str
```

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#location GoogleIamFoldersPolicyBinding#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#title GoogleIamFoldersPolicyBinding#title}

---

### GoogleIamFoldersPolicyBindingConfig <a name="GoogleIamFoldersPolicyBindingConfig" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_folders_policy_binding

googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  folder: str,
  location: str,
  policy: str,
  policy_binding_id: str,
  target: GoogleIamFoldersPolicyBindingTarget,
  annotations: typing.Mapping[str] = None,
  condition: GoogleIamFoldersPolicyBindingCondition = None,
  display_name: str = None,
  id: str = None,
  policy_kind: str = None,
  timeouts: GoogleIamFoldersPolicyBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.folder">folder</a></code> | <code>str</code> | The parent folder for the PolicyBinding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.location">location</a></code> | <code>str</code> | The location of the PolicyBinding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.policy">policy</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.policyBindingId">policy_binding_id</a></code> | <code>str</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#id GoogleIamFoldersPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.policyKind">policy_kind</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts">GoogleIamFoldersPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The parent folder for the PolicyBinding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#folder GoogleIamFoldersPolicyBinding#folder}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the PolicyBinding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#location GoogleIamFoldersPolicyBinding#location}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#policy GoogleIamFoldersPolicyBinding#policy}

---

##### `policy_binding_id`<sup>Required</sup> <a name="policy_binding_id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.policyBindingId"></a>

```python
policy_binding_id: str
```

- *Type:* str

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#policy_binding_id GoogleIamFoldersPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.target"></a>

```python
target: GoogleIamFoldersPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#target GoogleIamFoldersPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#annotations GoogleIamFoldersPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.condition"></a>

```python
condition: GoogleIamFoldersPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#condition GoogleIamFoldersPolicyBinding#condition}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#display_name GoogleIamFoldersPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#id GoogleIamFoldersPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_kind`<sup>Optional</sup> <a name="policy_kind" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.policyKind"></a>

```python
policy_kind: str
```

- *Type:* str

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#policy_kind GoogleIamFoldersPolicyBinding#policy_kind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConfig.property.timeouts"></a>

```python
timeouts: GoogleIamFoldersPolicyBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts">GoogleIamFoldersPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#timeouts GoogleIamFoldersPolicyBinding#timeouts}

---

### GoogleIamFoldersPolicyBindingTarget <a name="GoogleIamFoldersPolicyBindingTarget" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_folders_policy_binding

googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget(
  principal_set: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget.property.principalSet">principal_set</a></code> | <code>str</code> | Required. |

---

##### `principal_set`<sup>Optional</sup> <a name="principal_set" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget.property.principalSet"></a>

```python
principal_set: str
```

- *Type:* str

Required.

Immutable. The resource name of the policy to be bound.
The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#principal_set GoogleIamFoldersPolicyBinding#principal_set}

---

### GoogleIamFoldersPolicyBindingTimeouts <a name="GoogleIamFoldersPolicyBindingTimeouts" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_folders_policy_binding

googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#create GoogleIamFoldersPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#delete GoogleIamFoldersPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#update GoogleIamFoldersPolicyBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#create GoogleIamFoldersPolicyBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#delete GoogleIamFoldersPolicyBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_folders_policy_binding#update GoogleIamFoldersPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamFoldersPolicyBindingConditionOutputReference <a name="GoogleIamFoldersPolicyBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_folders_policy_binding

googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIamFoldersPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingCondition">GoogleIamFoldersPolicyBindingCondition</a>

---


### GoogleIamFoldersPolicyBindingTargetOutputReference <a name="GoogleIamFoldersPolicyBindingTargetOutputReference" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_folders_policy_binding

googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.resetPrincipalSet">reset_principal_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_principal_set` <a name="reset_principal_set" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```python
def reset_principal_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.principalSetInput">principal_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.principalSet">principal_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_set_input`<sup>Optional</sup> <a name="principal_set_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```python
principal_set_input: str
```

- *Type:* str

---

##### `principal_set`<sup>Required</sup> <a name="principal_set" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.principalSet"></a>

```python
principal_set: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTargetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIamFoldersPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTarget">GoogleIamFoldersPolicyBindingTarget</a>

---


### GoogleIamFoldersPolicyBindingTimeoutsOutputReference <a name="GoogleIamFoldersPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_iam_folders_policy_binding

googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts">GoogleIamFoldersPolicyBindingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIamFoldersPolicyBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIamFoldersPolicyBinding.GoogleIamFoldersPolicyBindingTimeouts">GoogleIamFoldersPolicyBindingTimeouts</a>]

---



