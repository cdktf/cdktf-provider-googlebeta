# `googleSccManagementProjectSecurityHealthAnalyticsCustomModule` Submodule <a name="`googleSccManagementProjectSecurityHealthAnalyticsCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module google_scc_management_project_security_health_analytics_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_config: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig = None,
  display_name: str = None,
  enablement_state: str = None,
  id: str = None,
  location: str = None,
  project: str = None,
  timeouts: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#id GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.location">location</a></code> | <code>str</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#project GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_config`<sup>Optional</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.customConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#custom_config GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#display_name GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablement_state`<sup>Optional</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#enablement_state GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#id GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.location"></a>

- *Type:* str

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#location GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#project GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#timeouts GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig">put_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetCustomConfig">reset_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetEnablementState">reset_enablement_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_config` <a name="put_custom_config" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig"></a>

```python
def put_custom_config(
  predicate: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate,
  recommendation: str,
  resource_selector: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector,
  severity: str,
  custom_output: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput = None,
  description: str = None
) -> None
```

###### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.predicate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#predicate GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#predicate}

---

###### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.recommendation"></a>

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#recommendation GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#recommendation}

---

###### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.resourceSelector"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#resource_selector GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#resource_selector}

---

###### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.severity"></a>

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#severity GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#severity}

---

###### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.customOutput"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#custom_output GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#custom_output}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.description"></a>

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#description GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#create GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#delete GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#update GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#update}.

---

##### `reset_custom_config` <a name="reset_custom_config" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetCustomConfig"></a>

```python
def reset_custom_config() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enablement_state` <a name="reset_enablement_state" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetEnablementState"></a>

```python
def reset_enablement_state() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.ancestorModule">ancestor_module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.lastEditor">last_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfigInput">custom_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementStateInput">enablement_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementState">enablement_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ancestor_module`<sup>Required</sup> <a name="ancestor_module" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.ancestorModule"></a>

```python
ancestor_module: str
```

- *Type:* str

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfig"></a>

```python
custom_config: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a>

---

##### `last_editor`<sup>Required</sup> <a name="last_editor" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.lastEditor"></a>

```python
last_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeouts"></a>

```python
timeouts: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `custom_config_input`<sup>Optional</sup> <a name="custom_config_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfigInput"></a>

```python
custom_config_input: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enablement_state_input`<sup>Optional</sup> <a name="enablement_state_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementStateInput"></a>

```python
enablement_state_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_config: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig = None,
  display_name: str = None,
  enablement_state: str = None,
  id: str = None,
  location: str = None,
  project: str = None,
  timeouts: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#id GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.location">location</a></code> | <code>str</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#project GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_config`<sup>Optional</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.customConfig"></a>

```python
custom_config: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#custom_config GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.displayName"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#display_name GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablement_state`<sup>Optional</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#enablement_state GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#id GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#location GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#project GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.timeouts"></a>

```python
timeouts: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#timeouts GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#timeouts}

---

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig(
  predicate: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate,
  recommendation: str,
  resource_selector: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector,
  severity: str,
  custom_output: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>str</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity">severity</a></code> | <code>str</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.description">description</a></code> | <code>str</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate"></a>

```python
predicate: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#predicate GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#predicate}

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#recommendation GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#recommendation}

---

##### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector"></a>

```python
resource_selector: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#resource_selector GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#resource_selector}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#severity GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#severity}

---

##### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput"></a>

```python
custom_output: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#custom_output GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#description GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput(
  properties: typing.Union[IResolvable, typing.List[GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties"></a>

```python
properties: typing.Union[IResolvable, typing.List[GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#properties GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#properties}

---

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties(
  name: str = None,
  value_expression: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>str</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#name GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#name}

---

##### `value_expression`<sup>Optional</sup> <a name="value_expression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```python
value_expression: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#value_expression GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#value_expression}

---

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#expression GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#description GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#location GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#title GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#title}

---

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#expression GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#description GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#location GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#title GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#title}

---

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector(
  resource_types: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | The resource types to run the detector on. |

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#resource_types GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#resource_types}

---

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#create GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#delete GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#update GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#create GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#delete GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#update GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_properties` <a name="put_properties" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```python
def put_properties(
  value: typing.Union[IResolvable, typing.List[GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```python
properties: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Union[IResolvable, typing.List[GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---


### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

---


### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">put_value_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">reset_value_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_expression` <a name="put_value_expression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```python
def put_value_expression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#expression GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#description GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#location GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#title GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#title}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value_expression` <a name="reset_value_expression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```python
def reset_value_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">value_expression_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_expression`<sup>Required</sup> <a name="value_expression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```python
value_expression: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_expression_input`<sup>Optional</sup> <a name="value_expression_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```python
value_expression_input: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]

---


### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput">put_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate">put_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector">put_resource_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput">reset_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_output` <a name="put_custom_output" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```python
def put_custom_output(
  properties: typing.Union[IResolvable, typing.List[GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]] = None
) -> None
```

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.properties"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#properties GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#properties}

---

##### `put_predicate` <a name="put_predicate" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate"></a>

```python
def put_predicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#expression GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#description GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#location GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#title GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#title}

---

##### `put_resource_selector` <a name="put_resource_selector" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```python
def put_resource_selector(
  resource_types: typing.List[str]
) -> None
```

###### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_management_project_security_health_analytics_custom_module#resource_types GoogleSccManagementProjectSecurityHealthAnalyticsCustomModule#resource_types}

---

##### `reset_custom_output` <a name="reset_custom_output" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```python
def reset_custom_output() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput">custom_output_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput">predicate_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resource_selector_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_output`<sup>Required</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```python
custom_output: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate"></a>

```python
predicate: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```python
resource_selector: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `custom_output_input`<sup>Optional</sup> <a name="custom_output_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```python
custom_output_input: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `predicate_input`<sup>Optional</sup> <a name="predicate_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```python
predicate_input: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `recommendation_input`<sup>Optional</sup> <a name="recommendation_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```python
recommendation_input: str
```

- *Type:* str

---

##### `resource_selector_input`<sup>Optional</sup> <a name="resource_selector_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```python
resource_selector_input: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---


### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---


### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---


### GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference <a name="GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_project_security_health_analytics_custom_module

googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementProjectSecurityHealthAnalyticsCustomModule.GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>]

---



