# `googleSccOrganizationCustomModule` Submodule <a name="`googleSccOrganizationCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccOrganizationCustomModule <a name="GoogleSccOrganizationCustomModule" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module google_scc_organization_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_config: GoogleSccOrganizationCustomModuleCustomConfig,
  display_name: str,
  enablement_state: str,
  organization: str,
  id: str = None,
  timeouts: GoogleSccOrganizationCustomModuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#id GoogleSccOrganizationCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts">GoogleSccOrganizationCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.customConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#custom_config GoogleSccOrganizationCustomModule#custom_config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#display_name GoogleSccOrganizationCustomModule#display_name}

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#enablement_state GoogleSccOrganizationCustomModule#enablement_state}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.organization"></a>

- *Type:* str

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#organization GoogleSccOrganizationCustomModule#organization}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#id GoogleSccOrganizationCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts">GoogleSccOrganizationCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#timeouts GoogleSccOrganizationCustomModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putCustomConfig">put_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_config` <a name="put_custom_config" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putCustomConfig"></a>

```python
def put_custom_config(
  predicate: GoogleSccOrganizationCustomModuleCustomConfigPredicate,
  recommendation: str,
  resource_selector: GoogleSccOrganizationCustomModuleCustomConfigResourceSelector,
  severity: str,
  custom_output: GoogleSccOrganizationCustomModuleCustomConfigCustomOutput = None,
  description: str = None
) -> None
```

###### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putCustomConfig.parameter.predicate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate">GoogleSccOrganizationCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#predicate GoogleSccOrganizationCustomModule#predicate}

---

###### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putCustomConfig.parameter.recommendation"></a>

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#recommendation GoogleSccOrganizationCustomModule#recommendation}

---

###### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putCustomConfig.parameter.resourceSelector"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector">GoogleSccOrganizationCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#resource_selector GoogleSccOrganizationCustomModule#resource_selector}

---

###### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putCustomConfig.parameter.severity"></a>

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#severity GoogleSccOrganizationCustomModule#severity}

---

###### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putCustomConfig.parameter.customOutput"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput">GoogleSccOrganizationCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#custom_output GoogleSccOrganizationCustomModule#custom_output}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putCustomConfig.parameter.description"></a>

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#description GoogleSccOrganizationCustomModule#description}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#create GoogleSccOrganizationCustomModule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#delete GoogleSccOrganizationCustomModule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#update GoogleSccOrganizationCustomModule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSccOrganizationCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSccOrganizationCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSccOrganizationCustomModule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSccOrganizationCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccOrganizationCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.ancestorModule">ancestor_module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference">GoogleSccOrganizationCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.lastEditor">last_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference">GoogleSccOrganizationCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.customConfigInput">custom_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.enablementStateInput">enablement_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts">GoogleSccOrganizationCustomModuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.enablementState">enablement_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.organization">organization</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ancestor_module`<sup>Required</sup> <a name="ancestor_module" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.ancestorModule"></a>

```python
ancestor_module: str
```

- *Type:* str

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.customConfig"></a>

```python
custom_config: GoogleSccOrganizationCustomModuleCustomConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference">GoogleSccOrganizationCustomModuleCustomConfigOutputReference</a>

---

##### `last_editor`<sup>Required</sup> <a name="last_editor" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.lastEditor"></a>

```python
last_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.timeouts"></a>

```python
timeouts: GoogleSccOrganizationCustomModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference">GoogleSccOrganizationCustomModuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `custom_config_input`<sup>Optional</sup> <a name="custom_config_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.customConfigInput"></a>

```python
custom_config_input: GoogleSccOrganizationCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enablement_state_input`<sup>Optional</sup> <a name="enablement_state_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.enablementStateInput"></a>

```python
enablement_state_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSccOrganizationCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts">GoogleSccOrganizationCustomModuleTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccOrganizationCustomModuleConfig <a name="GoogleSccOrganizationCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_config: GoogleSccOrganizationCustomModuleCustomConfig,
  display_name: str,
  enablement_state: str,
  organization: str,
  id: str = None,
  timeouts: GoogleSccOrganizationCustomModuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.organization">organization</a></code> | <code>str</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#id GoogleSccOrganizationCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts">GoogleSccOrganizationCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.customConfig"></a>

```python
custom_config: GoogleSccOrganizationCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#custom_config GoogleSccOrganizationCustomModule#custom_config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#display_name GoogleSccOrganizationCustomModule#display_name}

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#enablement_state GoogleSccOrganizationCustomModule#enablement_state}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#organization GoogleSccOrganizationCustomModule#organization}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#id GoogleSccOrganizationCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleConfig.property.timeouts"></a>

```python
timeouts: GoogleSccOrganizationCustomModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts">GoogleSccOrganizationCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#timeouts GoogleSccOrganizationCustomModule#timeouts}

---

### GoogleSccOrganizationCustomModuleCustomConfig <a name="GoogleSccOrganizationCustomModuleCustomConfig" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig(
  predicate: GoogleSccOrganizationCustomModuleCustomConfigPredicate,
  recommendation: str,
  resource_selector: GoogleSccOrganizationCustomModuleCustomConfigResourceSelector,
  severity: str,
  custom_output: GoogleSccOrganizationCustomModuleCustomConfigCustomOutput = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate">GoogleSccOrganizationCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>str</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector">GoogleSccOrganizationCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.severity">severity</a></code> | <code>str</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput">GoogleSccOrganizationCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.description">description</a></code> | <code>str</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.predicate"></a>

```python
predicate: GoogleSccOrganizationCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate">GoogleSccOrganizationCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#predicate GoogleSccOrganizationCustomModule#predicate}

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#recommendation GoogleSccOrganizationCustomModule#recommendation}

---

##### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.resourceSelector"></a>

```python
resource_selector: GoogleSccOrganizationCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector">GoogleSccOrganizationCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#resource_selector GoogleSccOrganizationCustomModule#resource_selector}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#severity GoogleSccOrganizationCustomModule#severity}

---

##### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.customOutput"></a>

```python
custom_output: GoogleSccOrganizationCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput">GoogleSccOrganizationCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#custom_output GoogleSccOrganizationCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#description GoogleSccOrganizationCustomModule#description}

---

### GoogleSccOrganizationCustomModuleCustomConfigCustomOutput <a name="GoogleSccOrganizationCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput(
  properties: typing.Union[IResolvable, typing.List[GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput.property.properties"></a>

```python
properties: typing.Union[IResolvable, typing.List[GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#properties GoogleSccOrganizationCustomModule#properties}

---

### GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties <a name="GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties(
  name: str = None,
  value_expression: GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>str</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#name GoogleSccOrganizationCustomModule#name}

---

##### `value_expression`<sup>Optional</sup> <a name="value_expression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```python
value_expression: GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#value_expression GoogleSccOrganizationCustomModule#value_expression}

---

### GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#expression GoogleSccOrganizationCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#description GoogleSccOrganizationCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#location GoogleSccOrganizationCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#title GoogleSccOrganizationCustomModule#title}

---

### GoogleSccOrganizationCustomModuleCustomConfigPredicate <a name="GoogleSccOrganizationCustomModuleCustomConfigPredicate" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#expression GoogleSccOrganizationCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#description GoogleSccOrganizationCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#location GoogleSccOrganizationCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#title GoogleSccOrganizationCustomModule#title}

---

### GoogleSccOrganizationCustomModuleCustomConfigResourceSelector <a name="GoogleSccOrganizationCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector(
  resource_types: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | The resource types to run the detector on. |

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#resource_types GoogleSccOrganizationCustomModule#resource_types}

---

### GoogleSccOrganizationCustomModuleTimeouts <a name="GoogleSccOrganizationCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#create GoogleSccOrganizationCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#delete GoogleSccOrganizationCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#update GoogleSccOrganizationCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#create GoogleSccOrganizationCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#delete GoogleSccOrganizationCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#update GoogleSccOrganizationCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference <a name="GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_properties` <a name="put_properties" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```python
def put_properties(
  value: typing.Union[IResolvable, typing.List[GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput">GoogleSccOrganizationCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```python
properties: GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Union[IResolvable, typing.List[GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccOrganizationCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput">GoogleSccOrganizationCustomModuleCustomConfigCustomOutput</a>

---


### GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList <a name="GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>]]

---


### GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">put_value_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">reset_value_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_expression` <a name="put_value_expression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```python
def put_value_expression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#expression GoogleSccOrganizationCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#description GoogleSccOrganizationCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#location GoogleSccOrganizationCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#title GoogleSccOrganizationCustomModule#title}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value_expression` <a name="reset_value_expression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```python
def reset_value_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">value_expression_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_expression`<sup>Required</sup> <a name="value_expression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```python
value_expression: GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_expression_input`<sup>Optional</sup> <a name="value_expression_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```python
value_expression_input: GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>]

---


### GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### GoogleSccOrganizationCustomModuleCustomConfigOutputReference <a name="GoogleSccOrganizationCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putCustomOutput">put_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putPredicate">put_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putResourceSelector">put_resource_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.resetCustomOutput">reset_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_output` <a name="put_custom_output" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```python
def put_custom_output(
  properties: typing.Union[IResolvable, typing.List[GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties]] = None
) -> None
```

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.properties"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#properties GoogleSccOrganizationCustomModule#properties}

---

##### `put_predicate` <a name="put_predicate" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putPredicate"></a>

```python
def put_predicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putPredicate.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#expression GoogleSccOrganizationCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putPredicate.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#description GoogleSccOrganizationCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putPredicate.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#location GoogleSccOrganizationCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putPredicate.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#title GoogleSccOrganizationCustomModule#title}

---

##### `put_resource_selector` <a name="put_resource_selector" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```python
def put_resource_selector(
  resource_types: typing.List[str]
) -> None
```

###### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_custom_module#resource_types GoogleSccOrganizationCustomModule#resource_types}

---

##### `reset_custom_output` <a name="reset_custom_output" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```python
def reset_custom_output() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference">GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.customOutputInput">custom_output_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput">GoogleSccOrganizationCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.predicateInput">predicate_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate">GoogleSccOrganizationCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resource_selector_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector">GoogleSccOrganizationCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_output`<sup>Required</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```python
custom_output: GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccOrganizationCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.predicate"></a>

```python
predicate: GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference">GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```python
resource_selector: GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `custom_output_input`<sup>Optional</sup> <a name="custom_output_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```python
custom_output_input: GoogleSccOrganizationCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigCustomOutput">GoogleSccOrganizationCustomModuleCustomConfigCustomOutput</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `predicate_input`<sup>Optional</sup> <a name="predicate_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```python
predicate_input: GoogleSccOrganizationCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate">GoogleSccOrganizationCustomModuleCustomConfigPredicate</a>

---

##### `recommendation_input`<sup>Optional</sup> <a name="recommendation_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```python
recommendation_input: str
```

- *Type:* str

---

##### `resource_selector_input`<sup>Optional</sup> <a name="resource_selector_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```python
resource_selector_input: GoogleSccOrganizationCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector">GoogleSccOrganizationCustomModuleCustomConfigResourceSelector</a>

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccOrganizationCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfig">GoogleSccOrganizationCustomModuleCustomConfig</a>

---


### GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference <a name="GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate">GoogleSccOrganizationCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccOrganizationCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigPredicate">GoogleSccOrganizationCustomModuleCustomConfigPredicate</a>

---


### GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference <a name="GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector">GoogleSccOrganizationCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccOrganizationCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleCustomConfigResourceSelector">GoogleSccOrganizationCustomModuleCustomConfigResourceSelector</a>

---


### GoogleSccOrganizationCustomModuleTimeoutsOutputReference <a name="GoogleSccOrganizationCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_organization_custom_module

googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts">GoogleSccOrganizationCustomModuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSccOrganizationCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccOrganizationCustomModule.GoogleSccOrganizationCustomModuleTimeouts">GoogleSccOrganizationCustomModuleTimeouts</a>]

---



