# `googleModelArmorFloorsetting` Submodule <a name="`googleModelArmorFloorsetting` Submodule" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleModelArmorFloorsetting <a name="GoogleModelArmorFloorsetting" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting google_model_armor_floorsetting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsetting(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter_config: GoogleModelArmorFloorsettingFilterConfig,
  location: str,
  parent: str,
  ai_platform_floor_setting: GoogleModelArmorFloorsettingAiPlatformFloorSetting = None,
  enable_floor_setting_enforcement: typing.Union[bool, IResolvable] = None,
  floor_setting_metadata: GoogleModelArmorFloorsettingFloorSettingMetadata = None,
  id: str = None,
  integrated_services: typing.List[str] = None,
  timeouts: GoogleModelArmorFloorsettingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.filterConfig">filter_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Will be any one of these:. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.aiPlatformFloorSetting">ai_platform_floor_setting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a></code> | ai_platform_floor_setting block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.enableFloorSettingEnforcement">enable_floor_setting_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Floor Settings enforcement status. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.floorSettingMetadata">floor_setting_metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a></code> | floor_setting_metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#id GoogleModelArmorFloorsetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.integratedServices">integrated_services</a></code> | <code>typing.List[str]</code> | List of integrated services for which the floor setting is applicable. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_config`<sup>Required</sup> <a name="filter_config" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.filterConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#filter_config GoogleModelArmorFloorsetting#filter_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#location GoogleModelArmorFloorsetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.parent"></a>

- *Type:* str

Will be any one of these:.

* 'projects/{project}'
* 'folders/{folder}'
* 'organizations/{organizationId}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#parent GoogleModelArmorFloorsetting#parent}

---

##### `ai_platform_floor_setting`<sup>Optional</sup> <a name="ai_platform_floor_setting" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.aiPlatformFloorSetting"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a>

ai_platform_floor_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#ai_platform_floor_setting GoogleModelArmorFloorsetting#ai_platform_floor_setting}

---

##### `enable_floor_setting_enforcement`<sup>Optional</sup> <a name="enable_floor_setting_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.enableFloorSettingEnforcement"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Floor Settings enforcement status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#enable_floor_setting_enforcement GoogleModelArmorFloorsetting#enable_floor_setting_enforcement}

---

##### `floor_setting_metadata`<sup>Optional</sup> <a name="floor_setting_metadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.floorSettingMetadata"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a>

floor_setting_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#floor_setting_metadata GoogleModelArmorFloorsetting#floor_setting_metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#id GoogleModelArmorFloorsetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrated_services`<sup>Optional</sup> <a name="integrated_services" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.integratedServices"></a>

- *Type:* typing.List[str]

List of integrated services for which the floor setting is applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#integrated_services GoogleModelArmorFloorsetting#integrated_services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#timeouts GoogleModelArmorFloorsetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putAiPlatformFloorSetting">put_ai_platform_floor_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFilterConfig">put_filter_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFloorSettingMetadata">put_floor_setting_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetAiPlatformFloorSetting">reset_ai_platform_floor_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetEnableFloorSettingEnforcement">reset_enable_floor_setting_enforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetFloorSettingMetadata">reset_floor_setting_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetIntegratedServices">reset_integrated_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ai_platform_floor_setting` <a name="put_ai_platform_floor_setting" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putAiPlatformFloorSetting"></a>

```python
def put_ai_platform_floor_setting(
  enable_cloud_logging: typing.Union[bool, IResolvable] = None,
  inspect_and_block: typing.Union[bool, IResolvable] = None,
  inspect_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_cloud_logging`<sup>Optional</sup> <a name="enable_cloud_logging" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putAiPlatformFloorSetting.parameter.enableCloudLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, log Model Armor filter results to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#enable_cloud_logging GoogleModelArmorFloorsetting#enable_cloud_logging}

---

###### `inspect_and_block`<sup>Optional</sup> <a name="inspect_and_block" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putAiPlatformFloorSetting.parameter.inspectAndBlock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Model Armor filters will be run in inspect and block mode.

Requests that trip Model Armor filters will be blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#inspect_and_block GoogleModelArmorFloorsetting#inspect_and_block}

---

###### `inspect_only`<sup>Optional</sup> <a name="inspect_only" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putAiPlatformFloorSetting.parameter.inspectOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#inspect_only GoogleModelArmorFloorsetting#inspect_only}

---

##### `put_filter_config` <a name="put_filter_config" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFilterConfig"></a>

```python
def put_filter_config(
  malicious_uri_filter_settings: GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings = None,
  pi_and_jailbreak_filter_settings: GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings = None,
  rai_settings: GoogleModelArmorFloorsettingFilterConfigRaiSettings = None,
  sdp_settings: GoogleModelArmorFloorsettingFilterConfigSdpSettings = None
) -> None
```

###### `malicious_uri_filter_settings`<sup>Optional</sup> <a name="malicious_uri_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFilterConfig.parameter.maliciousUriFilterSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#malicious_uri_filter_settings GoogleModelArmorFloorsetting#malicious_uri_filter_settings}

---

###### `pi_and_jailbreak_filter_settings`<sup>Optional</sup> <a name="pi_and_jailbreak_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFilterConfig.parameter.piAndJailbreakFilterSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#pi_and_jailbreak_filter_settings GoogleModelArmorFloorsetting#pi_and_jailbreak_filter_settings}

---

###### `rai_settings`<sup>Optional</sup> <a name="rai_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFilterConfig.parameter.raiSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#rai_settings GoogleModelArmorFloorsetting#rai_settings}

---

###### `sdp_settings`<sup>Optional</sup> <a name="sdp_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFilterConfig.parameter.sdpSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#sdp_settings GoogleModelArmorFloorsetting#sdp_settings}

---

##### `put_floor_setting_metadata` <a name="put_floor_setting_metadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFloorSettingMetadata"></a>

```python
def put_floor_setting_metadata(
  multi_language_detection: GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection = None
) -> None
```

###### `multi_language_detection`<sup>Optional</sup> <a name="multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFloorSettingMetadata.parameter.multiLanguageDetection"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#multi_language_detection GoogleModelArmorFloorsetting#multi_language_detection}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#create GoogleModelArmorFloorsetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#delete GoogleModelArmorFloorsetting#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#update GoogleModelArmorFloorsetting#update}.

---

##### `reset_ai_platform_floor_setting` <a name="reset_ai_platform_floor_setting" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetAiPlatformFloorSetting"></a>

```python
def reset_ai_platform_floor_setting() -> None
```

##### `reset_enable_floor_setting_enforcement` <a name="reset_enable_floor_setting_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetEnableFloorSettingEnforcement"></a>

```python
def reset_enable_floor_setting_enforcement() -> None
```

##### `reset_floor_setting_metadata` <a name="reset_floor_setting_metadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetFloorSettingMetadata"></a>

```python
def reset_floor_setting_metadata() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integrated_services` <a name="reset_integrated_services" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetIntegratedServices"></a>

```python
def reset_integrated_services() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleModelArmorFloorsetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleModelArmorFloorsetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleModelArmorFloorsetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleModelArmorFloorsetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleModelArmorFloorsetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.aiPlatformFloorSetting">ai_platform_floor_setting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference">GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.filterConfig">filter_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.floorSettingMetadata">floor_setting_metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference">GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference">GoogleModelArmorFloorsettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.aiPlatformFloorSettingInput">ai_platform_floor_setting_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.enableFloorSettingEnforcementInput">enable_floor_setting_enforcement_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.filterConfigInput">filter_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.floorSettingMetadataInput">floor_setting_metadata_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.integratedServicesInput">integrated_services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.enableFloorSettingEnforcement">enable_floor_setting_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.integratedServices">integrated_services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ai_platform_floor_setting`<sup>Required</sup> <a name="ai_platform_floor_setting" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.aiPlatformFloorSetting"></a>

```python
ai_platform_floor_setting: GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference">GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `filter_config`<sup>Required</sup> <a name="filter_config" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.filterConfig"></a>

```python
filter_config: GoogleModelArmorFloorsettingFilterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigOutputReference</a>

---

##### `floor_setting_metadata`<sup>Required</sup> <a name="floor_setting_metadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.floorSettingMetadata"></a>

```python
floor_setting_metadata: GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference">GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.timeouts"></a>

```python
timeouts: GoogleModelArmorFloorsettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference">GoogleModelArmorFloorsettingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `ai_platform_floor_setting_input`<sup>Optional</sup> <a name="ai_platform_floor_setting_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.aiPlatformFloorSettingInput"></a>

```python
ai_platform_floor_setting_input: GoogleModelArmorFloorsettingAiPlatformFloorSetting
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a>

---

##### `enable_floor_setting_enforcement_input`<sup>Optional</sup> <a name="enable_floor_setting_enforcement_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.enableFloorSettingEnforcementInput"></a>

```python
enable_floor_setting_enforcement_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_config_input`<sup>Optional</sup> <a name="filter_config_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.filterConfigInput"></a>

```python
filter_config_input: GoogleModelArmorFloorsettingFilterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a>

---

##### `floor_setting_metadata_input`<sup>Optional</sup> <a name="floor_setting_metadata_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.floorSettingMetadataInput"></a>

```python
floor_setting_metadata_input: GoogleModelArmorFloorsettingFloorSettingMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integrated_services_input`<sup>Optional</sup> <a name="integrated_services_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.integratedServicesInput"></a>

```python
integrated_services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleModelArmorFloorsettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>]

---

##### `enable_floor_setting_enforcement`<sup>Required</sup> <a name="enable_floor_setting_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.enableFloorSettingEnforcement"></a>

```python
enable_floor_setting_enforcement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integrated_services`<sup>Required</sup> <a name="integrated_services" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.integratedServices"></a>

```python
integrated_services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleModelArmorFloorsettingAiPlatformFloorSetting <a name="GoogleModelArmorFloorsettingAiPlatformFloorSetting" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting(
  enable_cloud_logging: typing.Union[bool, IResolvable] = None,
  inspect_and_block: typing.Union[bool, IResolvable] = None,
  inspect_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.enableCloudLogging">enable_cloud_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, log Model Armor filter results to Cloud Logging. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.inspectAndBlock">inspect_and_block</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, Model Armor filters will be run in inspect and block mode. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.inspectOnly">inspect_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request. |

---

##### `enable_cloud_logging`<sup>Optional</sup> <a name="enable_cloud_logging" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.enableCloudLogging"></a>

```python
enable_cloud_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, log Model Armor filter results to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#enable_cloud_logging GoogleModelArmorFloorsetting#enable_cloud_logging}

---

##### `inspect_and_block`<sup>Optional</sup> <a name="inspect_and_block" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.inspectAndBlock"></a>

```python
inspect_and_block: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Model Armor filters will be run in inspect and block mode.

Requests that trip Model Armor filters will be blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#inspect_and_block GoogleModelArmorFloorsetting#inspect_and_block}

---

##### `inspect_only`<sup>Optional</sup> <a name="inspect_only" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.inspectOnly"></a>

```python
inspect_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#inspect_only GoogleModelArmorFloorsetting#inspect_only}

---

### GoogleModelArmorFloorsettingConfig <a name="GoogleModelArmorFloorsettingConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter_config: GoogleModelArmorFloorsettingFilterConfig,
  location: str,
  parent: str,
  ai_platform_floor_setting: GoogleModelArmorFloorsettingAiPlatformFloorSetting = None,
  enable_floor_setting_enforcement: typing.Union[bool, IResolvable] = None,
  floor_setting_metadata: GoogleModelArmorFloorsettingFloorSettingMetadata = None,
  id: str = None,
  integrated_services: typing.List[str] = None,
  timeouts: GoogleModelArmorFloorsettingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.filterConfig">filter_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.parent">parent</a></code> | <code>str</code> | Will be any one of these:. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.aiPlatformFloorSetting">ai_platform_floor_setting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a></code> | ai_platform_floor_setting block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.enableFloorSettingEnforcement">enable_floor_setting_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Floor Settings enforcement status. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.floorSettingMetadata">floor_setting_metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a></code> | floor_setting_metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#id GoogleModelArmorFloorsetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.integratedServices">integrated_services</a></code> | <code>typing.List[str]</code> | List of integrated services for which the floor setting is applicable. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_config`<sup>Required</sup> <a name="filter_config" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.filterConfig"></a>

```python
filter_config: GoogleModelArmorFloorsettingFilterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#filter_config GoogleModelArmorFloorsetting#filter_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#location GoogleModelArmorFloorsetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Will be any one of these:.

* 'projects/{project}'
* 'folders/{folder}'
* 'organizations/{organizationId}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#parent GoogleModelArmorFloorsetting#parent}

---

##### `ai_platform_floor_setting`<sup>Optional</sup> <a name="ai_platform_floor_setting" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.aiPlatformFloorSetting"></a>

```python
ai_platform_floor_setting: GoogleModelArmorFloorsettingAiPlatformFloorSetting
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a>

ai_platform_floor_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#ai_platform_floor_setting GoogleModelArmorFloorsetting#ai_platform_floor_setting}

---

##### `enable_floor_setting_enforcement`<sup>Optional</sup> <a name="enable_floor_setting_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.enableFloorSettingEnforcement"></a>

```python
enable_floor_setting_enforcement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Floor Settings enforcement status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#enable_floor_setting_enforcement GoogleModelArmorFloorsetting#enable_floor_setting_enforcement}

---

##### `floor_setting_metadata`<sup>Optional</sup> <a name="floor_setting_metadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.floorSettingMetadata"></a>

```python
floor_setting_metadata: GoogleModelArmorFloorsettingFloorSettingMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a>

floor_setting_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#floor_setting_metadata GoogleModelArmorFloorsetting#floor_setting_metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#id GoogleModelArmorFloorsetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrated_services`<sup>Optional</sup> <a name="integrated_services" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.integratedServices"></a>

```python
integrated_services: typing.List[str]
```

- *Type:* typing.List[str]

List of integrated services for which the floor setting is applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#integrated_services GoogleModelArmorFloorsetting#integrated_services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.timeouts"></a>

```python
timeouts: GoogleModelArmorFloorsettingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#timeouts GoogleModelArmorFloorsetting#timeouts}

---

### GoogleModelArmorFloorsettingFilterConfig <a name="GoogleModelArmorFloorsettingFilterConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig(
  malicious_uri_filter_settings: GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings = None,
  pi_and_jailbreak_filter_settings: GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings = None,
  rai_settings: GoogleModelArmorFloorsettingFilterConfigRaiSettings = None,
  sdp_settings: GoogleModelArmorFloorsettingFilterConfigSdpSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.maliciousUriFilterSettings">malicious_uri_filter_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | malicious_uri_filter_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.piAndJailbreakFilterSettings">pi_and_jailbreak_filter_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | pi_and_jailbreak_filter_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.raiSettings">rai_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a></code> | rai_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.sdpSettings">sdp_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a></code> | sdp_settings block. |

---

##### `malicious_uri_filter_settings`<sup>Optional</sup> <a name="malicious_uri_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.maliciousUriFilterSettings"></a>

```python
malicious_uri_filter_settings: GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#malicious_uri_filter_settings GoogleModelArmorFloorsetting#malicious_uri_filter_settings}

---

##### `pi_and_jailbreak_filter_settings`<sup>Optional</sup> <a name="pi_and_jailbreak_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.piAndJailbreakFilterSettings"></a>

```python
pi_and_jailbreak_filter_settings: GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#pi_and_jailbreak_filter_settings GoogleModelArmorFloorsetting#pi_and_jailbreak_filter_settings}

---

##### `rai_settings`<sup>Optional</sup> <a name="rai_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.raiSettings"></a>

```python
rai_settings: GoogleModelArmorFloorsettingFilterConfigRaiSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#rai_settings GoogleModelArmorFloorsetting#rai_settings}

---

##### `sdp_settings`<sup>Optional</sup> <a name="sdp_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.sdpSettings"></a>

```python
sdp_settings: GoogleModelArmorFloorsettingFilterConfigSdpSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#sdp_settings GoogleModelArmorFloorsetting#sdp_settings}

---

### GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings <a name="GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings(
  filter_enforcement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#filter_enforcement GoogleModelArmorFloorsetting#filter_enforcement}

---

### GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings <a name="GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings(
  confidence_level: str = None,
  filter_enforcement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#confidence_level GoogleModelArmorFloorsetting#confidence_level}

---

##### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#filter_enforcement GoogleModelArmorFloorsetting#filter_enforcement}

---

### GoogleModelArmorFloorsettingFilterConfigRaiSettings <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings(
  rai_filters: typing.Union[IResolvable, typing.List[GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings.property.raiFilters">rai_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]</code> | rai_filters block. |

---

##### `rai_filters`<sup>Required</sup> <a name="rai_filters" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings.property.raiFilters"></a>

```python
rai_filters: typing.Union[IResolvable, typing.List[GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#rai_filters GoogleModelArmorFloorsetting#rai_filters}

---

### GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters(
  filter_type: str,
  confidence_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.filterType">filter_type</a></code> | <code>str</code> | Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#filter_type GoogleModelArmorFloorsetting#filter_type}

---

##### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#confidence_level GoogleModelArmorFloorsetting#confidence_level}

---

### GoogleModelArmorFloorsettingFilterConfigSdpSettings <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings(
  advanced_config: GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig = None,
  basic_config: GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.property.advancedConfig">advanced_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | advanced_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.property.basicConfig">basic_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | basic_config block. |

---

##### `advanced_config`<sup>Optional</sup> <a name="advanced_config" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.property.advancedConfig"></a>

```python
advanced_config: GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#advanced_config GoogleModelArmorFloorsetting#advanced_config}

---

##### `basic_config`<sup>Optional</sup> <a name="basic_config" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.property.basicConfig"></a>

```python
basic_config: GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#basic_config GoogleModelArmorFloorsetting#basic_config}

---

### GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig(
  deidentify_template: str = None,
  inspect_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate">deidentify_template</a></code> | <code>str</code> | Optional Sensitive Data Protection Deidentify template resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate">inspect_template</a></code> | <code>str</code> | Sensitive Data Protection inspect template resource name. |

---

##### `deidentify_template`<sup>Optional</sup> <a name="deidentify_template" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate"></a>

```python
deidentify_template: str
```

- *Type:* str

Optional Sensitive Data Protection Deidentify template resource name.

If provided then DeidentifyContent action is performed during Sanitization
using this template and inspect template. The De-identified data will
be returned in SdpDeidentifyResult.
Note that all info-types present in the deidentify template must be present
in inspect template.

e.g.
'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#deidentify_template GoogleModelArmorFloorsetting#deidentify_template}

---

##### `inspect_template`<sup>Optional</sup> <a name="inspect_template" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate"></a>

```python
inspect_template: str
```

- *Type:* str

Sensitive Data Protection inspect template resource name.

If only inspect template is provided (de-identify template not provided),
then Sensitive Data Protection InspectContent action is performed during
Sanitization. All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.

e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#inspect_template GoogleModelArmorFloorsetting#inspect_template}

---

### GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig(
  filter_enforcement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#filter_enforcement GoogleModelArmorFloorsetting#filter_enforcement}

---

### GoogleModelArmorFloorsettingFloorSettingMetadata <a name="GoogleModelArmorFloorsettingFloorSettingMetadata" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata(
  multi_language_detection: GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata.property.multiLanguageDetection">multi_language_detection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | multi_language_detection block. |

---

##### `multi_language_detection`<sup>Optional</sup> <a name="multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata.property.multiLanguageDetection"></a>

```python
multi_language_detection: GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#multi_language_detection GoogleModelArmorFloorsetting#multi_language_detection}

---

### GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection <a name="GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection(
  enable_multi_language_detection: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.property.enableMultiLanguageDetection">enable_multi_language_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, multi language detection will be enabled. |

---

##### `enable_multi_language_detection`<sup>Required</sup> <a name="enable_multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.property.enableMultiLanguageDetection"></a>

```python
enable_multi_language_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#enable_multi_language_detection GoogleModelArmorFloorsetting#enable_multi_language_detection}

---

### GoogleModelArmorFloorsettingTimeouts <a name="GoogleModelArmorFloorsettingTimeouts" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#create GoogleModelArmorFloorsetting#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#delete GoogleModelArmorFloorsetting#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#update GoogleModelArmorFloorsetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#create GoogleModelArmorFloorsetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#delete GoogleModelArmorFloorsetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#update GoogleModelArmorFloorsetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference <a name="GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetEnableCloudLogging">reset_enable_cloud_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectAndBlock">reset_inspect_and_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectOnly">reset_inspect_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_cloud_logging` <a name="reset_enable_cloud_logging" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetEnableCloudLogging"></a>

```python
def reset_enable_cloud_logging() -> None
```

##### `reset_inspect_and_block` <a name="reset_inspect_and_block" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectAndBlock"></a>

```python
def reset_inspect_and_block() -> None
```

##### `reset_inspect_only` <a name="reset_inspect_only" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectOnly"></a>

```python
def reset_inspect_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLoggingInput">enable_cloud_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlockInput">inspect_and_block_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnlyInput">inspect_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLogging">enable_cloud_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlock">inspect_and_block</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnly">inspect_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_cloud_logging_input`<sup>Optional</sup> <a name="enable_cloud_logging_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLoggingInput"></a>

```python
enable_cloud_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `inspect_and_block_input`<sup>Optional</sup> <a name="inspect_and_block_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlockInput"></a>

```python
inspect_and_block_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `inspect_only_input`<sup>Optional</sup> <a name="inspect_only_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnlyInput"></a>

```python
inspect_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_cloud_logging`<sup>Required</sup> <a name="enable_cloud_logging" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLogging"></a>

```python
enable_cloud_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `inspect_and_block`<sup>Required</sup> <a name="inspect_and_block" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlock"></a>

```python
inspect_and_block: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `inspect_only`<sup>Required</sup> <a name="inspect_only" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnly"></a>

```python
inspect_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorFloorsettingAiPlatformFloorSetting
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a>

---


### GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement">reset_filter_enforcement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_enforcement` <a name="reset_filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement"></a>

```python
def reset_filter_enforcement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput">filter_enforcement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_enforcement_input`<sup>Optional</sup> <a name="filter_enforcement_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```python
filter_enforcement_input: str
```

- *Type:* str

---

##### `filter_enforcement`<sup>Required</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---


### GoogleModelArmorFloorsettingFilterConfigOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings">put_malicious_uri_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings">put_pi_and_jailbreak_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings">put_rai_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings">put_sdp_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetMaliciousUriFilterSettings">reset_malicious_uri_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetPiAndJailbreakFilterSettings">reset_pi_and_jailbreak_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetRaiSettings">reset_rai_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetSdpSettings">reset_sdp_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_malicious_uri_filter_settings` <a name="put_malicious_uri_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings"></a>

```python
def put_malicious_uri_filter_settings(
  filter_enforcement: str = None
) -> None
```

###### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings.parameter.filterEnforcement"></a>

- *Type:* str

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#filter_enforcement GoogleModelArmorFloorsetting#filter_enforcement}

---

##### `put_pi_and_jailbreak_filter_settings` <a name="put_pi_and_jailbreak_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings"></a>

```python
def put_pi_and_jailbreak_filter_settings(
  confidence_level: str = None,
  filter_enforcement: str = None
) -> None
```

###### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.confidenceLevel"></a>

- *Type:* str

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#confidence_level GoogleModelArmorFloorsetting#confidence_level}

---

###### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.filterEnforcement"></a>

- *Type:* str

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#filter_enforcement GoogleModelArmorFloorsetting#filter_enforcement}

---

##### `put_rai_settings` <a name="put_rai_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings"></a>

```python
def put_rai_settings(
  rai_filters: typing.Union[IResolvable, typing.List[GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters]]
) -> None
```

###### `rai_filters`<sup>Required</sup> <a name="rai_filters" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings.parameter.raiFilters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#rai_filters GoogleModelArmorFloorsetting#rai_filters}

---

##### `put_sdp_settings` <a name="put_sdp_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings"></a>

```python
def put_sdp_settings(
  advanced_config: GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig = None,
  basic_config: GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig = None
) -> None
```

###### `advanced_config`<sup>Optional</sup> <a name="advanced_config" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings.parameter.advancedConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#advanced_config GoogleModelArmorFloorsetting#advanced_config}

---

###### `basic_config`<sup>Optional</sup> <a name="basic_config" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings.parameter.basicConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#basic_config GoogleModelArmorFloorsetting#basic_config}

---

##### `reset_malicious_uri_filter_settings` <a name="reset_malicious_uri_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetMaliciousUriFilterSettings"></a>

```python
def reset_malicious_uri_filter_settings() -> None
```

##### `reset_pi_and_jailbreak_filter_settings` <a name="reset_pi_and_jailbreak_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetPiAndJailbreakFilterSettings"></a>

```python
def reset_pi_and_jailbreak_filter_settings() -> None
```

##### `reset_rai_settings` <a name="reset_rai_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetRaiSettings"></a>

```python
def reset_rai_settings() -> None
```

##### `reset_sdp_settings` <a name="reset_sdp_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetSdpSettings"></a>

```python
def reset_sdp_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettings">malicious_uri_filter_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettings">pi_and_jailbreak_filter_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.raiSettings">rai_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettings">sdp_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettingsInput">malicious_uri_filter_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput">pi_and_jailbreak_filter_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.raiSettingsInput">rai_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettingsInput">sdp_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `malicious_uri_filter_settings`<sup>Required</sup> <a name="malicious_uri_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettings"></a>

```python
malicious_uri_filter_settings: GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference</a>

---

##### `pi_and_jailbreak_filter_settings`<sup>Required</sup> <a name="pi_and_jailbreak_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettings"></a>

```python
pi_and_jailbreak_filter_settings: GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference</a>

---

##### `rai_settings`<sup>Required</sup> <a name="rai_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.raiSettings"></a>

```python
rai_settings: GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference</a>

---

##### `sdp_settings`<sup>Required</sup> <a name="sdp_settings" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettings"></a>

```python
sdp_settings: GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference</a>

---

##### `malicious_uri_filter_settings_input`<sup>Optional</sup> <a name="malicious_uri_filter_settings_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettingsInput"></a>

```python
malicious_uri_filter_settings_input: GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---

##### `pi_and_jailbreak_filter_settings_input`<sup>Optional</sup> <a name="pi_and_jailbreak_filter_settings_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput"></a>

```python
pi_and_jailbreak_filter_settings_input: GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `rai_settings_input`<sup>Optional</sup> <a name="rai_settings_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.raiSettingsInput"></a>

```python
rai_settings_input: GoogleModelArmorFloorsettingFilterConfigRaiSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a>

---

##### `sdp_settings_input`<sup>Optional</sup> <a name="sdp_settings_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettingsInput"></a>

```python
sdp_settings_input: GoogleModelArmorFloorsettingFilterConfigSdpSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorFloorsettingFilterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a>

---


### GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel">reset_confidence_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement">reset_filter_enforcement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_confidence_level` <a name="reset_confidence_level" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel"></a>

```python
def reset_confidence_level() -> None
```

##### `reset_filter_enforcement` <a name="reset_filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement"></a>

```python
def reset_filter_enforcement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput">confidence_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput">filter_enforcement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidence_level_input`<sup>Optional</sup> <a name="confidence_level_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput"></a>

```python
confidence_level_input: str
```

- *Type:* str

---

##### `filter_enforcement_input`<sup>Optional</sup> <a name="filter_enforcement_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```python
filter_enforcement_input: str
```

- *Type:* str

---

##### `confidence_level`<sup>Required</sup> <a name="confidence_level" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

---

##### `filter_enforcement`<sup>Required</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---


### GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters">put_rai_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rai_filters` <a name="put_rai_filters" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters"></a>

```python
def put_rai_filters(
  value: typing.Union[IResolvable, typing.List[GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFilters">rai_filters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFiltersInput">rai_filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rai_filters`<sup>Required</sup> <a name="rai_filters" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFilters"></a>

```python
rai_filters: GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList</a>

---

##### `rai_filters_input`<sup>Optional</sup> <a name="rai_filters_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFiltersInput"></a>

```python
rai_filters_input: typing.Union[IResolvable, typing.List[GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorFloorsettingFilterConfigRaiSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a>

---


### GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]

---


### GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel">reset_confidence_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_confidence_level` <a name="reset_confidence_level" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel"></a>

```python
def reset_confidence_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput">confidence_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidence_level_input`<sup>Optional</sup> <a name="confidence_level_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput"></a>

```python
confidence_level_input: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `confidence_level`<sup>Required</sup> <a name="confidence_level" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]

---


### GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate">reset_deidentify_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate">reset_inspect_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deidentify_template` <a name="reset_deidentify_template" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate"></a>

```python
def reset_deidentify_template() -> None
```

##### `reset_inspect_template` <a name="reset_inspect_template" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate"></a>

```python
def reset_inspect_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput">deidentify_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput">inspect_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate">deidentify_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate">inspect_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deidentify_template_input`<sup>Optional</sup> <a name="deidentify_template_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput"></a>

```python
deidentify_template_input: str
```

- *Type:* str

---

##### `inspect_template_input`<sup>Optional</sup> <a name="inspect_template_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput"></a>

```python
inspect_template_input: str
```

- *Type:* str

---

##### `deidentify_template`<sup>Required</sup> <a name="deidentify_template" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate"></a>

```python
deidentify_template: str
```

- *Type:* str

---

##### `inspect_template`<sup>Required</sup> <a name="inspect_template" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate"></a>

```python
inspect_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---


### GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement">reset_filter_enforcement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_enforcement` <a name="reset_filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement"></a>

```python
def reset_filter_enforcement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput">filter_enforcement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_enforcement_input`<sup>Optional</sup> <a name="filter_enforcement_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput"></a>

```python
filter_enforcement_input: str
```

- *Type:* str

---

##### `filter_enforcement`<sup>Required</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---


### GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig">put_advanced_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig">put_basic_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetAdvancedConfig">reset_advanced_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetBasicConfig">reset_basic_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_advanced_config` <a name="put_advanced_config" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig"></a>

```python
def put_advanced_config(
  deidentify_template: str = None,
  inspect_template: str = None
) -> None
```

###### `deidentify_template`<sup>Optional</sup> <a name="deidentify_template" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.deidentifyTemplate"></a>

- *Type:* str

Optional Sensitive Data Protection Deidentify template resource name.

If provided then DeidentifyContent action is performed during Sanitization
using this template and inspect template. The De-identified data will
be returned in SdpDeidentifyResult.
Note that all info-types present in the deidentify template must be present
in inspect template.

e.g.
'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#deidentify_template GoogleModelArmorFloorsetting#deidentify_template}

---

###### `inspect_template`<sup>Optional</sup> <a name="inspect_template" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.inspectTemplate"></a>

- *Type:* str

Sensitive Data Protection inspect template resource name.

If only inspect template is provided (de-identify template not provided),
then Sensitive Data Protection InspectContent action is performed during
Sanitization. All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.

e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#inspect_template GoogleModelArmorFloorsetting#inspect_template}

---

##### `put_basic_config` <a name="put_basic_config" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig"></a>

```python
def put_basic_config(
  filter_enforcement: str = None
) -> None
```

###### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig.parameter.filterEnforcement"></a>

- *Type:* str

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#filter_enforcement GoogleModelArmorFloorsetting#filter_enforcement}

---

##### `reset_advanced_config` <a name="reset_advanced_config" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetAdvancedConfig"></a>

```python
def reset_advanced_config() -> None
```

##### `reset_basic_config` <a name="reset_basic_config" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetBasicConfig"></a>

```python
def reset_basic_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfig">advanced_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfig">basic_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfigInput">advanced_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfigInput">basic_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_config`<sup>Required</sup> <a name="advanced_config" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfig"></a>

```python
advanced_config: GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference</a>

---

##### `basic_config`<sup>Required</sup> <a name="basic_config" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfig"></a>

```python
basic_config: GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference</a>

---

##### `advanced_config_input`<sup>Optional</sup> <a name="advanced_config_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfigInput"></a>

```python
advanced_config_input: GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `basic_config_input`<sup>Optional</sup> <a name="basic_config_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfigInput"></a>

```python
basic_config_input: GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorFloorsettingFilterConfigSdpSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a>

---


### GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference <a name="GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput">enable_multi_language_detection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection">enable_multi_language_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_multi_language_detection_input`<sup>Optional</sup> <a name="enable_multi_language_detection_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput"></a>

```python
enable_multi_language_detection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_multi_language_detection`<sup>Required</sup> <a name="enable_multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection"></a>

```python
enable_multi_language_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---


### GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference <a name="GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection">put_multi_language_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resetMultiLanguageDetection">reset_multi_language_detection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_multi_language_detection` <a name="put_multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection"></a>

```python
def put_multi_language_detection(
  enable_multi_language_detection: typing.Union[bool, IResolvable]
) -> None
```

###### `enable_multi_language_detection`<sup>Required</sup> <a name="enable_multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection.parameter.enableMultiLanguageDetection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_model_armor_floorsetting#enable_multi_language_detection GoogleModelArmorFloorsetting#enable_multi_language_detection}

---

##### `reset_multi_language_detection` <a name="reset_multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resetMultiLanguageDetection"></a>

```python
def reset_multi_language_detection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetection">multi_language_detection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetectionInput">multi_language_detection_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multi_language_detection`<sup>Required</sup> <a name="multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetection"></a>

```python
multi_language_detection: GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference</a>

---

##### `multi_language_detection_input`<sup>Optional</sup> <a name="multi_language_detection_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetectionInput"></a>

```python
multi_language_detection_input: GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorFloorsettingFloorSettingMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a>

---


### GoogleModelArmorFloorsettingTimeoutsOutputReference <a name="GoogleModelArmorFloorsettingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_floorsetting

googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleModelArmorFloorsettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>]

---



