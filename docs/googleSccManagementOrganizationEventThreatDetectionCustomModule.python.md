# `googleSccManagementOrganizationEventThreatDetectionCustomModule` Submodule <a name="`googleSccManagementOrganizationEventThreatDetectionCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccManagementOrganizationEventThreatDetectionCustomModule <a name="GoogleSccManagementOrganizationEventThreatDetectionCustomModule" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module google_scc_management_organization_event_threat_detection_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_organization_event_threat_detection_custom_module

googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  organization: str,
  config: str = None,
  display_name: str = None,
  enablement_state: str = None,
  id: str = None,
  location: str = None,
  timeouts: GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.config">config</a></code> | <code>str</code> | Config for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.enablementState">enablement_state</a></code> | <code>str</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#id GoogleSccManagementOrganizationEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.location">location</a></code> | <code>str</code> | Location ID of the parent organization. Only global is supported at the moment. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.type">type</a></code> | <code>str</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.organization"></a>

- *Type:* str

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#organization GoogleSccManagementOrganizationEventThreatDetectionCustomModule#organization}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.config"></a>

- *Type:* str

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#config GoogleSccManagementOrganizationEventThreatDetectionCustomModule#config}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.displayName"></a>

- *Type:* str

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#display_name GoogleSccManagementOrganizationEventThreatDetectionCustomModule#display_name}

---

##### `enablement_state`<sup>Optional</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* str

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#enablement_state GoogleSccManagementOrganizationEventThreatDetectionCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#id GoogleSccManagementOrganizationEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.location"></a>

- *Type:* str

Location ID of the parent organization. Only global is supported at the moment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#location GoogleSccManagementOrganizationEventThreatDetectionCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#timeouts GoogleSccManagementOrganizationEventThreatDetectionCustomModule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.type"></a>

- *Type:* str

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#type GoogleSccManagementOrganizationEventThreatDetectionCustomModule#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetEnablementState">reset_enablement_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#create GoogleSccManagementOrganizationEventThreatDetectionCustomModule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#delete GoogleSccManagementOrganizationEventThreatDetectionCustomModule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#update GoogleSccManagementOrganizationEventThreatDetectionCustomModule#update}.

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enablement_state` <a name="reset_enablement_state" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetEnablementState"></a>

```python
def reset_enablement_state() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSccManagementOrganizationEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_organization_event_threat_detection_custom_module

googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_organization_event_threat_detection_custom_module

googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_organization_event_threat_detection_custom_module

googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_organization_event_threat_detection_custom_module

googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSccManagementOrganizationEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSccManagementOrganizationEventThreatDetectionCustomModule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSccManagementOrganizationEventThreatDetectionCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccManagementOrganizationEventThreatDetectionCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.lastEditor">last_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.configInput">config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.enablementStateInput">enablement_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.config">config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.enablementState">enablement_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `last_editor`<sup>Required</sup> <a name="last_editor" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.lastEditor"></a>

```python
last_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.timeouts"></a>

```python
timeouts: GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.configInput"></a>

```python
config_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enablement_state_input`<sup>Optional</sup> <a name="enablement_state_input" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.enablementStateInput"></a>

```python
enablement_state_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.config"></a>

```python
config: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig <a name="GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_organization_event_threat_detection_custom_module

googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  organization: str,
  config: str = None,
  display_name: str = None,
  enablement_state: str = None,
  id: str = None,
  location: str = None,
  timeouts: GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.organization">organization</a></code> | <code>str</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.config">config</a></code> | <code>str</code> | Config for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.displayName">display_name</a></code> | <code>str</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.enablementState">enablement_state</a></code> | <code>str</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#id GoogleSccManagementOrganizationEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.location">location</a></code> | <code>str</code> | Location ID of the parent organization. Only global is supported at the moment. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.type">type</a></code> | <code>str</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#organization GoogleSccManagementOrganizationEventThreatDetectionCustomModule#organization}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.config"></a>

```python
config: str
```

- *Type:* str

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#config GoogleSccManagementOrganizationEventThreatDetectionCustomModule#config}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#display_name GoogleSccManagementOrganizationEventThreatDetectionCustomModule#display_name}

---

##### `enablement_state`<sup>Optional</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#enablement_state GoogleSccManagementOrganizationEventThreatDetectionCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#id GoogleSccManagementOrganizationEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location ID of the parent organization. Only global is supported at the moment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#location GoogleSccManagementOrganizationEventThreatDetectionCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.timeouts"></a>

```python
timeouts: GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#timeouts GoogleSccManagementOrganizationEventThreatDetectionCustomModule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#type GoogleSccManagementOrganizationEventThreatDetectionCustomModule#type}

---

### GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts <a name="GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_organization_event_threat_detection_custom_module

googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#create GoogleSccManagementOrganizationEventThreatDetectionCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#delete GoogleSccManagementOrganizationEventThreatDetectionCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#update GoogleSccManagementOrganizationEventThreatDetectionCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#create GoogleSccManagementOrganizationEventThreatDetectionCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#delete GoogleSccManagementOrganizationEventThreatDetectionCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#update GoogleSccManagementOrganizationEventThreatDetectionCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference <a name="GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_management_organization_event_threat_detection_custom_module

googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>]

---



