# `googleSccManagementFolderSecurityHealthAnalyticsCustomModule` Submodule <a name="`googleSccManagementFolderSecurityHealthAnalyticsCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module google_scc_management_folder_security_health_analytics_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule(
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
  custom_config: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig = None,
  display_name: str = None,
  enablement_state: str = None,
  id: str = None,
  location: str = None,
  timeouts: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.folder">folder</a></code> | <code>str</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#id GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.location">location</a></code> | <code>str</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.folder"></a>

- *Type:* str

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#folder GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#folder}

---

##### `custom_config`<sup>Optional</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.customConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#custom_config GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#display_name GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablement_state`<sup>Optional</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#enablement_state GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#id GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.location"></a>

- *Type:* str

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#location GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#timeouts GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig">put_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetCustomConfig">reset_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetEnablementState">reset_enablement_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_config` <a name="put_custom_config" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig"></a>

```python
def put_custom_config(
  custom_output: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput = None,
  description: str = None,
  predicate: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate = None,
  recommendation: str = None,
  resource_selector: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector = None,
  severity: str = None
) -> None
```

###### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.customOutput"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#custom_output GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#custom_output}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.description"></a>

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#description GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

###### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.predicate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#predicate GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#predicate}

---

###### `recommendation`<sup>Optional</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.recommendation"></a>

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#recommendation GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#recommendation}

---

###### `resource_selector`<sup>Optional</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.resourceSelector"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#resource_selector GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#resource_selector}

---

###### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.severity"></a>

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#severity GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#severity}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#create GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#delete GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#update GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#update}.

---

##### `reset_custom_config` <a name="reset_custom_config" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetCustomConfig"></a>

```python
def reset_custom_config() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enablement_state` <a name="reset_enablement_state" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetEnablementState"></a>

```python
def reset_enablement_state() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.ancestorModule">ancestor_module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.lastEditor">last_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfigInput">custom_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementStateInput">enablement_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementState">enablement_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.location">location</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ancestor_module`<sup>Required</sup> <a name="ancestor_module" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.ancestorModule"></a>

```python
ancestor_module: str
```

- *Type:* str

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfig"></a>

```python
custom_config: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a>

---

##### `last_editor`<sup>Required</sup> <a name="last_editor" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.lastEditor"></a>

```python
last_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeouts"></a>

```python
timeouts: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `custom_config_input`<sup>Optional</sup> <a name="custom_config_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfigInput"></a>

```python
custom_config_input: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enablement_state_input`<sup>Optional</sup> <a name="enablement_state_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementStateInput"></a>

```python
enablement_state_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.location"></a>

```python
location: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  folder: str,
  custom_config: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig = None,
  display_name: str = None,
  enablement_state: str = None,
  id: str = None,
  location: str = None,
  timeouts: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.folder">folder</a></code> | <code>str</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#id GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.location">location</a></code> | <code>str</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#folder GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#folder}

---

##### `custom_config`<sup>Optional</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.customConfig"></a>

```python
custom_config: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#custom_config GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.displayName"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#display_name GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablement_state`<sup>Optional</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#enablement_state GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#id GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#location GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.timeouts"></a>

```python
timeouts: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#timeouts GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#timeouts}

---

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig(
  custom_output: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput = None,
  description: str = None,
  predicate: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate = None,
  recommendation: str = None,
  resource_selector: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector = None,
  severity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.description">description</a></code> | <code>str</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>str</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity">severity</a></code> | <code>str</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |

---

##### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput"></a>

```python
custom_output: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#custom_output GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#description GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate"></a>

```python
predicate: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#predicate GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#predicate}

---

##### `recommendation`<sup>Optional</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#recommendation GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#recommendation}

---

##### `resource_selector`<sup>Optional</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector"></a>

```python
resource_selector: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#resource_selector GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#resource_selector}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#severity GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#severity}

---

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput(
  properties: typing.Union[IResolvable, typing.List[GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties"></a>

```python
properties: typing.Union[IResolvable, typing.List[GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#properties GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#properties}

---

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties(
  name: str = None,
  value_expression: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>str</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#name GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#name}

---

##### `value_expression`<sup>Optional</sup> <a name="value_expression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```python
value_expression: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#value_expression GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#value_expression}

---

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#expression GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#description GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#location GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#title GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#title}

---

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#expression GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#description GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#location GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#title GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#title}

---

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector(
  resource_types: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | The resource types to run the detector on. |

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#resource_types GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#resource_types}

---

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#create GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#delete GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#update GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#create GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#delete GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#update GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_properties` <a name="put_properties" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```python
def put_properties(
  value: typing.Union[IResolvable, typing.List[GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```python
properties: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Union[IResolvable, typing.List[GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---


### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

---


### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">put_value_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">reset_value_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_expression` <a name="put_value_expression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```python
def put_value_expression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#expression GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#description GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#location GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#title GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#title}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value_expression` <a name="reset_value_expression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```python
def reset_value_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">value_expression_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_expression`<sup>Required</sup> <a name="value_expression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```python
value_expression: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_expression_input`<sup>Optional</sup> <a name="value_expression_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```python
value_expression_input: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]

---


### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput">put_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate">put_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector">put_resource_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput">reset_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetPredicate">reset_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetRecommendation">reset_recommendation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetResourceSelector">reset_resource_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetSeverity">reset_severity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_output` <a name="put_custom_output" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```python
def put_custom_output(
  properties: typing.Union[IResolvable, typing.List[GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]] = None
) -> None
```

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.properties"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#properties GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#properties}

---

##### `put_predicate` <a name="put_predicate" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate"></a>

```python
def put_predicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#expression GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#description GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#location GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#title GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#title}

---

##### `put_resource_selector` <a name="put_resource_selector" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```python
def put_resource_selector(
  resource_types: typing.List[str]
) -> None
```

###### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_scc_management_folder_security_health_analytics_custom_module#resource_types GoogleSccManagementFolderSecurityHealthAnalyticsCustomModule#resource_types}

---

##### `reset_custom_output` <a name="reset_custom_output" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```python
def reset_custom_output() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_predicate` <a name="reset_predicate" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetPredicate"></a>

```python
def reset_predicate() -> None
```

##### `reset_recommendation` <a name="reset_recommendation" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetRecommendation"></a>

```python
def reset_recommendation() -> None
```

##### `reset_resource_selector` <a name="reset_resource_selector" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetResourceSelector"></a>

```python
def reset_resource_selector() -> None
```

##### `reset_severity` <a name="reset_severity" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetSeverity"></a>

```python
def reset_severity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput">custom_output_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput">predicate_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resource_selector_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_output`<sup>Required</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```python
custom_output: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate"></a>

```python
predicate: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```python
resource_selector: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `custom_output_input`<sup>Optional</sup> <a name="custom_output_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```python
custom_output_input: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `predicate_input`<sup>Optional</sup> <a name="predicate_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```python
predicate_input: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `recommendation_input`<sup>Optional</sup> <a name="recommendation_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```python
recommendation_input: str
```

- *Type:* str

---

##### `resource_selector_input`<sup>Optional</sup> <a name="resource_selector_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```python
resource_selector_input: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---


### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---


### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---


### GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference <a name="GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_folder_security_health_analytics_custom_module

googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementFolderSecurityHealthAnalyticsCustomModule.GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>]

---



