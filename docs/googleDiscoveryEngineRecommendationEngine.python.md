# `googleDiscoveryEngineRecommendationEngine` Submodule <a name="`googleDiscoveryEngineRecommendationEngine` Submodule" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineRecommendationEngine <a name="GoogleDiscoveryEngineRecommendationEngine" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine google_discovery_engine_recommendation_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_store_ids: typing.List[str],
  display_name: str,
  engine_id: str,
  location: str,
  common_config: GoogleDiscoveryEngineRecommendationEngineCommonConfig = None,
  id: str = None,
  industry_vertical: str = None,
  media_recommendation_engine_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig = None,
  project: str = None,
  timeouts: GoogleDiscoveryEngineRecommendationEngineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.engineId">engine_id</a></code> | <code>str</code> | Unique ID to use for Recommendation Engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.commonConfig">common_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#id GoogleDiscoveryEngineRecommendationEngine#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.mediaRecommendationEngineConfig">media_recommendation_engine_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | media_recommendation_engine_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#project GoogleDiscoveryEngineRecommendationEngine#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.dataStoreIds"></a>

- *Type:* typing.List[str]

The data stores associated with this engine.

For SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#data_store_ids GoogleDiscoveryEngineRecommendationEngine#data_store_ids}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.displayName"></a>

- *Type:* str

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#display_name GoogleDiscoveryEngineRecommendationEngine#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.engineId"></a>

- *Type:* str

Unique ID to use for Recommendation Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#engine_id GoogleDiscoveryEngineRecommendationEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#location GoogleDiscoveryEngineRecommendationEngine#location}

---

##### `common_config`<sup>Optional</sup> <a name="common_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.commonConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#common_config GoogleDiscoveryEngineRecommendationEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#id GoogleDiscoveryEngineRecommendationEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industry_vertical`<sup>Optional</sup> <a name="industry_vertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.industryVertical"></a>

- *Type:* str

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#industry_vertical GoogleDiscoveryEngineRecommendationEngine#industry_vertical}

---

##### `media_recommendation_engine_config`<sup>Optional</sup> <a name="media_recommendation_engine_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.mediaRecommendationEngineConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

media_recommendation_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#media_recommendation_engine_config GoogleDiscoveryEngineRecommendationEngine#media_recommendation_engine_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#project GoogleDiscoveryEngineRecommendationEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#timeouts GoogleDiscoveryEngineRecommendationEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putCommonConfig">put_common_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig">put_media_recommendation_engine_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetCommonConfig">reset_common_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetIndustryVertical">reset_industry_vertical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetMediaRecommendationEngineConfig">reset_media_recommendation_engine_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_common_config` <a name="put_common_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putCommonConfig"></a>

```python
def put_common_config(
  company_name: str = None
) -> None
```

###### `company_name`<sup>Optional</sup> <a name="company_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putCommonConfig.parameter.companyName"></a>

- *Type:* str

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#company_name GoogleDiscoveryEngineRecommendationEngine#company_name}

---

##### `put_media_recommendation_engine_config` <a name="put_media_recommendation_engine_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig"></a>

```python
def put_media_recommendation_engine_config(
  engine_features_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig = None,
  optimization_objective: str = None,
  optimization_objective_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig = None,
  training_state: str = None,
  type: str = None
) -> None
```

###### `engine_features_config`<sup>Optional</sup> <a name="engine_features_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig.parameter.engineFeaturesConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

engine_features_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#engine_features_config GoogleDiscoveryEngineRecommendationEngine#engine_features_config}

---

###### `optimization_objective`<sup>Optional</sup> <a name="optimization_objective" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig.parameter.optimizationObjective"></a>

- *Type:* str

The optimization objective.

e.g., 'cvr'.
This field together with MediaRecommendationEngineConfig.type describes
engine metadata to use to control engine training and serving.
Currently supported values: 'ctr', 'cvr'.
If not specified, we choose default based on engine type. Default depends on type of recommendation:
'recommended-for-you' => 'ctr'
'others-you-may-like' => 'ctr'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#optimization_objective GoogleDiscoveryEngineRecommendationEngine#optimization_objective}

---

###### `optimization_objective_config`<sup>Optional</sup> <a name="optimization_objective_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig.parameter.optimizationObjectiveConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

optimization_objective_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#optimization_objective_config GoogleDiscoveryEngineRecommendationEngine#optimization_objective_config}

---

###### `training_state`<sup>Optional</sup> <a name="training_state" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig.parameter.trainingState"></a>

- *Type:* str

The training state that the engine is in (e.g. 'TRAINING' or 'PAUSED'). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for 'CreateEngine' method is 'TRAINING'. The default value for 'UpdateEngine' method is to keep the state the same as before. Possible values: ["PAUSED", "TRAINING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#training_state GoogleDiscoveryEngineRecommendationEngine#training_state}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig.parameter.type"></a>

- *Type:* str

The type of engine.

e.g., 'recommended-for-you'.
This field together with MediaRecommendationEngineConfig.optimizationObjective describes
engine metadata to use to control engine training and serving.
Currently supported values: 'recommended-for-you', 'others-you-may-like',
'more-like-this', 'most-popular-items'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#type GoogleDiscoveryEngineRecommendationEngine#type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#create GoogleDiscoveryEngineRecommendationEngine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#delete GoogleDiscoveryEngineRecommendationEngine#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#update GoogleDiscoveryEngineRecommendationEngine#update}.

---

##### `reset_common_config` <a name="reset_common_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetCommonConfig"></a>

```python
def reset_common_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_industry_vertical` <a name="reset_industry_vertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetIndustryVertical"></a>

```python
def reset_industry_vertical() -> None
```

##### `reset_media_recommendation_engine_config` <a name="reset_media_recommendation_engine_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetMediaRecommendationEngineConfig"></a>

```python
def reset_media_recommendation_engine_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDiscoveryEngineRecommendationEngine resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDiscoveryEngineRecommendationEngine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDiscoveryEngineRecommendationEngine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDiscoveryEngineRecommendationEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineRecommendationEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.commonConfig">common_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfig">media_recommendation_engine_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference">GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.commonConfigInput">common_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.dataStoreIdsInput">data_store_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.engineIdInput">engine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.industryVerticalInput">industry_vertical_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfigInput">media_recommendation_engine_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.engineId">engine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.industryVertical">industry_vertical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `common_config`<sup>Required</sup> <a name="common_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.commonConfig"></a>

```python
common_config: GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `media_recommendation_engine_config`<sup>Required</sup> <a name="media_recommendation_engine_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfig"></a>

```python
media_recommendation_engine_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference">GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `common_config_input`<sup>Optional</sup> <a name="common_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.commonConfigInput"></a>

```python
common_config_input: GoogleDiscoveryEngineRecommendationEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a>

---

##### `data_store_ids_input`<sup>Optional</sup> <a name="data_store_ids_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.dataStoreIdsInput"></a>

```python
data_store_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `engine_id_input`<sup>Optional</sup> <a name="engine_id_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.engineIdInput"></a>

```python
engine_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `industry_vertical_input`<sup>Optional</sup> <a name="industry_vertical_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.industryVerticalInput"></a>

```python
industry_vertical_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `media_recommendation_engine_config_input`<sup>Optional</sup> <a name="media_recommendation_engine_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfigInput"></a>

```python
media_recommendation_engine_config_input: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDiscoveryEngineRecommendationEngineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a>]

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.dataStoreIds"></a>

```python
data_store_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineRecommendationEngineCommonConfig <a name="GoogleDiscoveryEngineRecommendationEngineCommonConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig(
  company_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig.property.companyName">company_name</a></code> | <code>str</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `company_name`<sup>Optional</sup> <a name="company_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#company_name GoogleDiscoveryEngineRecommendationEngine#company_name}

---

### GoogleDiscoveryEngineRecommendationEngineConfig <a name="GoogleDiscoveryEngineRecommendationEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_store_ids: typing.List[str],
  display_name: str,
  engine_id: str,
  location: str,
  common_config: GoogleDiscoveryEngineRecommendationEngineCommonConfig = None,
  id: str = None,
  industry_vertical: str = None,
  media_recommendation_engine_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig = None,
  project: str = None,
  timeouts: GoogleDiscoveryEngineRecommendationEngineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.engineId">engine_id</a></code> | <code>str</code> | Unique ID to use for Recommendation Engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.commonConfig">common_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#id GoogleDiscoveryEngineRecommendationEngine#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.mediaRecommendationEngineConfig">media_recommendation_engine_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | media_recommendation_engine_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#project GoogleDiscoveryEngineRecommendationEngine#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.dataStoreIds"></a>

```python
data_store_ids: typing.List[str]
```

- *Type:* typing.List[str]

The data stores associated with this engine.

For SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#data_store_ids GoogleDiscoveryEngineRecommendationEngine#data_store_ids}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#display_name GoogleDiscoveryEngineRecommendationEngine#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

Unique ID to use for Recommendation Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#engine_id GoogleDiscoveryEngineRecommendationEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#location GoogleDiscoveryEngineRecommendationEngine#location}

---

##### `common_config`<sup>Optional</sup> <a name="common_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.commonConfig"></a>

```python
common_config: GoogleDiscoveryEngineRecommendationEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#common_config GoogleDiscoveryEngineRecommendationEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#id GoogleDiscoveryEngineRecommendationEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industry_vertical`<sup>Optional</sup> <a name="industry_vertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#industry_vertical GoogleDiscoveryEngineRecommendationEngine#industry_vertical}

---

##### `media_recommendation_engine_config`<sup>Optional</sup> <a name="media_recommendation_engine_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.mediaRecommendationEngineConfig"></a>

```python
media_recommendation_engine_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

media_recommendation_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#media_recommendation_engine_config GoogleDiscoveryEngineRecommendationEngine#media_recommendation_engine_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#project GoogleDiscoveryEngineRecommendationEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineConfig.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineRecommendationEngineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#timeouts GoogleDiscoveryEngineRecommendationEngine#timeouts}

---

### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig(
  engine_features_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig = None,
  optimization_objective: str = None,
  optimization_objective_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig = None,
  training_state: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.engineFeaturesConfig">engine_features_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | engine_features_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjective">optimization_objective</a></code> | <code>str</code> | The optimization objective. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjectiveConfig">optimization_objective_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | optimization_objective_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.trainingState">training_state</a></code> | <code>str</code> | The training state that the engine is in (e.g. 'TRAINING' or 'PAUSED'). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for 'CreateEngine' method is 'TRAINING'. The default value for 'UpdateEngine' method is to keep the state the same as before. Possible values: ["PAUSED", "TRAINING"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.type">type</a></code> | <code>str</code> | The type of engine. |

---

##### `engine_features_config`<sup>Optional</sup> <a name="engine_features_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.engineFeaturesConfig"></a>

```python
engine_features_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

engine_features_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#engine_features_config GoogleDiscoveryEngineRecommendationEngine#engine_features_config}

---

##### `optimization_objective`<sup>Optional</sup> <a name="optimization_objective" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjective"></a>

```python
optimization_objective: str
```

- *Type:* str

The optimization objective.

e.g., 'cvr'.
This field together with MediaRecommendationEngineConfig.type describes
engine metadata to use to control engine training and serving.
Currently supported values: 'ctr', 'cvr'.
If not specified, we choose default based on engine type. Default depends on type of recommendation:
'recommended-for-you' => 'ctr'
'others-you-may-like' => 'ctr'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#optimization_objective GoogleDiscoveryEngineRecommendationEngine#optimization_objective}

---

##### `optimization_objective_config`<sup>Optional</sup> <a name="optimization_objective_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjectiveConfig"></a>

```python
optimization_objective_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

optimization_objective_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#optimization_objective_config GoogleDiscoveryEngineRecommendationEngine#optimization_objective_config}

---

##### `training_state`<sup>Optional</sup> <a name="training_state" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.trainingState"></a>

```python
training_state: str
```

- *Type:* str

The training state that the engine is in (e.g. 'TRAINING' or 'PAUSED'). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for 'CreateEngine' method is 'TRAINING'. The default value for 'UpdateEngine' method is to keep the state the same as before. Possible values: ["PAUSED", "TRAINING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#training_state GoogleDiscoveryEngineRecommendationEngine#training_state}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of engine.

e.g., 'recommended-for-you'.
This field together with MediaRecommendationEngineConfig.optimizationObjective describes
engine metadata to use to control engine training and serving.
Currently supported values: 'recommended-for-you', 'others-you-may-like',
'more-like-this', 'most-popular-items'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#type GoogleDiscoveryEngineRecommendationEngine#type}

---

### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig(
  most_popular_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig = None,
  recommended_for_you_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.mostPopularConfig">most_popular_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | most_popular_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.recommendedForYouConfig">recommended_for_you_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | recommended_for_you_config block. |

---

##### `most_popular_config`<sup>Optional</sup> <a name="most_popular_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.mostPopularConfig"></a>

```python
most_popular_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

most_popular_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#most_popular_config GoogleDiscoveryEngineRecommendationEngine#most_popular_config}

---

##### `recommended_for_you_config`<sup>Optional</sup> <a name="recommended_for_you_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.recommendedForYouConfig"></a>

```python
recommended_for_you_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

recommended_for_you_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#recommended_for_you_config GoogleDiscoveryEngineRecommendationEngine#recommended_for_you_config}

---

### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig(
  time_window_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.property.timeWindowDays">time_window_days</a></code> | <code>typing.Union[int, float]</code> | The time window of which the engine is queried at training and prediction time. |

---

##### `time_window_days`<sup>Optional</sup> <a name="time_window_days" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.property.timeWindowDays"></a>

```python
time_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time window of which the engine is queried at training and prediction time.

Positive integers only. The value translates to the
last X days of events. Currently required for the 'most-popular-items'
engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#time_window_days GoogleDiscoveryEngineRecommendationEngine#time_window_days}

---

### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig(
  context_event_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.property.contextEventType">context_event_type</a></code> | <code>str</code> | The type of event with which the engine is queried at prediction time. |

---

##### `context_event_type`<sup>Optional</sup> <a name="context_event_type" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.property.contextEventType"></a>

```python
context_event_type: str
```

- *Type:* str

The type of event with which the engine is queried at prediction time.

If set to 'generic', only 'view-item', 'media-play',and
'media-complete' will be used as 'context-event' in engine training. If
set to 'view-home-page', 'view-home-page' will also be used as
'context-events' in addition to 'view-item', 'media-play', and
'media-complete'. Currently supported for the 'recommended-for-you'
engine. Currently supported values: 'view-home-page', 'generic'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#context_event_type GoogleDiscoveryEngineRecommendationEngine#context_event_type}

---

### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig(
  target_field: str = None,
  target_field_value_float: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetField">target_field</a></code> | <code>str</code> | The name of the field to target. Currently supported values: 'watch-percentage', 'watch-time'. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetFieldValueFloat">target_field_value_float</a></code> | <code>typing.Union[int, float]</code> | The threshold to be applied to the target (e.g., 0.5). |

---

##### `target_field`<sup>Optional</sup> <a name="target_field" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetField"></a>

```python
target_field: str
```

- *Type:* str

The name of the field to target. Currently supported values: 'watch-percentage', 'watch-time'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#target_field GoogleDiscoveryEngineRecommendationEngine#target_field}

---

##### `target_field_value_float`<sup>Optional</sup> <a name="target_field_value_float" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetFieldValueFloat"></a>

```python
target_field_value_float: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold to be applied to the target (e.g., 0.5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#target_field_value_float GoogleDiscoveryEngineRecommendationEngine#target_field_value_float}

---

### GoogleDiscoveryEngineRecommendationEngineTimeouts <a name="GoogleDiscoveryEngineRecommendationEngineTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#create GoogleDiscoveryEngineRecommendationEngine#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#delete GoogleDiscoveryEngineRecommendationEngine#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#update GoogleDiscoveryEngineRecommendationEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#create GoogleDiscoveryEngineRecommendationEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#delete GoogleDiscoveryEngineRecommendationEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#update GoogleDiscoveryEngineRecommendationEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference <a name="GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.resetCompanyName">reset_company_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_company_name` <a name="reset_company_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.resetCompanyName"></a>

```python
def reset_company_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyNameInput">company_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `company_name_input`<sup>Optional</sup> <a name="company_name_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyNameInput"></a>

```python
company_name_input: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineRecommendationEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineCommonConfig">GoogleDiscoveryEngineRecommendationEngineCommonConfig</a>

---


### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resetTimeWindowDays">reset_time_window_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_time_window_days` <a name="reset_time_window_days" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resetTimeWindowDays"></a>

```python
def reset_time_window_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDaysInput">time_window_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDays">time_window_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_window_days_input`<sup>Optional</sup> <a name="time_window_days_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDaysInput"></a>

```python
time_window_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_window_days`<sup>Required</sup> <a name="time_window_days" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDays"></a>

```python
time_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

---


### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig">put_most_popular_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig">put_recommended_for_you_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetMostPopularConfig">reset_most_popular_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetRecommendedForYouConfig">reset_recommended_for_you_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_most_popular_config` <a name="put_most_popular_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig"></a>

```python
def put_most_popular_config(
  time_window_days: typing.Union[int, float] = None
) -> None
```

###### `time_window_days`<sup>Optional</sup> <a name="time_window_days" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig.parameter.timeWindowDays"></a>

- *Type:* typing.Union[int, float]

The time window of which the engine is queried at training and prediction time.

Positive integers only. The value translates to the
last X days of events. Currently required for the 'most-popular-items'
engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#time_window_days GoogleDiscoveryEngineRecommendationEngine#time_window_days}

---

##### `put_recommended_for_you_config` <a name="put_recommended_for_you_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig"></a>

```python
def put_recommended_for_you_config(
  context_event_type: str = None
) -> None
```

###### `context_event_type`<sup>Optional</sup> <a name="context_event_type" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig.parameter.contextEventType"></a>

- *Type:* str

The type of event with which the engine is queried at prediction time.

If set to 'generic', only 'view-item', 'media-play',and
'media-complete' will be used as 'context-event' in engine training. If
set to 'view-home-page', 'view-home-page' will also be used as
'context-events' in addition to 'view-item', 'media-play', and
'media-complete'. Currently supported for the 'recommended-for-you'
engine. Currently supported values: 'view-home-page', 'generic'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#context_event_type GoogleDiscoveryEngineRecommendationEngine#context_event_type}

---

##### `reset_most_popular_config` <a name="reset_most_popular_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetMostPopularConfig"></a>

```python
def reset_most_popular_config() -> None
```

##### `reset_recommended_for_you_config` <a name="reset_recommended_for_you_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetRecommendedForYouConfig"></a>

```python
def reset_recommended_for_you_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfig">most_popular_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfig">recommended_for_you_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfigInput">most_popular_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfigInput">recommended_for_you_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `most_popular_config`<sup>Required</sup> <a name="most_popular_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfig"></a>

```python
most_popular_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference</a>

---

##### `recommended_for_you_config`<sup>Required</sup> <a name="recommended_for_you_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfig"></a>

```python
recommended_for_you_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference</a>

---

##### `most_popular_config_input`<sup>Optional</sup> <a name="most_popular_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfigInput"></a>

```python
most_popular_config_input: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

---

##### `recommended_for_you_config_input`<sup>Optional</sup> <a name="recommended_for_you_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfigInput"></a>

```python
recommended_for_you_config_input: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

---


### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resetContextEventType">reset_context_event_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_context_event_type` <a name="reset_context_event_type" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resetContextEventType"></a>

```python
def reset_context_event_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventTypeInput">context_event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventType">context_event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_event_type_input`<sup>Optional</sup> <a name="context_event_type_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventTypeInput"></a>

```python
context_event_type_input: str
```

- *Type:* str

---

##### `context_event_type`<sup>Required</sup> <a name="context_event_type" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventType"></a>

```python
context_event_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

---


### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetField">reset_target_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetFieldValueFloat">reset_target_field_value_float</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_field` <a name="reset_target_field" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetField"></a>

```python
def reset_target_field() -> None
```

##### `reset_target_field_value_float` <a name="reset_target_field_value_float" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetFieldValueFloat"></a>

```python
def reset_target_field_value_float() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldInput">target_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloatInput">target_field_value_float_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetField">target_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloat">target_field_value_float</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_field_input`<sup>Optional</sup> <a name="target_field_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldInput"></a>

```python
target_field_input: str
```

- *Type:* str

---

##### `target_field_value_float_input`<sup>Optional</sup> <a name="target_field_value_float_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloatInput"></a>

```python
target_field_value_float_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_field`<sup>Required</sup> <a name="target_field" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetField"></a>

```python
target_field: str
```

- *Type:* str

---

##### `target_field_value_float`<sup>Required</sup> <a name="target_field_value_float" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloat"></a>

```python
target_field_value_float: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

---


### GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference <a name="GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig">put_engine_features_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig">put_optimization_objective_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetEngineFeaturesConfig">reset_engine_features_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjective">reset_optimization_objective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjectiveConfig">reset_optimization_objective_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetTrainingState">reset_training_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_engine_features_config` <a name="put_engine_features_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig"></a>

```python
def put_engine_features_config(
  most_popular_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig = None,
  recommended_for_you_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig = None
) -> None
```

###### `most_popular_config`<sup>Optional</sup> <a name="most_popular_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig.parameter.mostPopularConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

most_popular_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#most_popular_config GoogleDiscoveryEngineRecommendationEngine#most_popular_config}

---

###### `recommended_for_you_config`<sup>Optional</sup> <a name="recommended_for_you_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig.parameter.recommendedForYouConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

recommended_for_you_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#recommended_for_you_config GoogleDiscoveryEngineRecommendationEngine#recommended_for_you_config}

---

##### `put_optimization_objective_config` <a name="put_optimization_objective_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig"></a>

```python
def put_optimization_objective_config(
  target_field: str = None,
  target_field_value_float: typing.Union[int, float] = None
) -> None
```

###### `target_field`<sup>Optional</sup> <a name="target_field" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig.parameter.targetField"></a>

- *Type:* str

The name of the field to target. Currently supported values: 'watch-percentage', 'watch-time'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#target_field GoogleDiscoveryEngineRecommendationEngine#target_field}

---

###### `target_field_value_float`<sup>Optional</sup> <a name="target_field_value_float" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig.parameter.targetFieldValueFloat"></a>

- *Type:* typing.Union[int, float]

The threshold to be applied to the target (e.g., 0.5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_recommendation_engine#target_field_value_float GoogleDiscoveryEngineRecommendationEngine#target_field_value_float}

---

##### `reset_engine_features_config` <a name="reset_engine_features_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetEngineFeaturesConfig"></a>

```python
def reset_engine_features_config() -> None
```

##### `reset_optimization_objective` <a name="reset_optimization_objective" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjective"></a>

```python
def reset_optimization_objective() -> None
```

##### `reset_optimization_objective_config` <a name="reset_optimization_objective_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjectiveConfig"></a>

```python
def reset_optimization_objective_config() -> None
```

##### `reset_training_state` <a name="reset_training_state" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetTrainingState"></a>

```python
def reset_training_state() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfig">engine_features_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfig">optimization_objective_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfigInput">engine_features_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfigInput">optimization_objective_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveInput">optimization_objective_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingStateInput">training_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjective">optimization_objective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingState">training_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `engine_features_config`<sup>Required</sup> <a name="engine_features_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfig"></a>

```python
engine_features_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference</a>

---

##### `optimization_objective_config`<sup>Required</sup> <a name="optimization_objective_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfig"></a>

```python
optimization_objective_config: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference</a>

---

##### `engine_features_config_input`<sup>Optional</sup> <a name="engine_features_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfigInput"></a>

```python
engine_features_config_input: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

---

##### `optimization_objective_config_input`<sup>Optional</sup> <a name="optimization_objective_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfigInput"></a>

```python
optimization_objective_config_input: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

---

##### `optimization_objective_input`<sup>Optional</sup> <a name="optimization_objective_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveInput"></a>

```python
optimization_objective_input: str
```

- *Type:* str

---

##### `training_state_input`<sup>Optional</sup> <a name="training_state_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingStateInput"></a>

```python
training_state_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `optimization_objective`<sup>Required</sup> <a name="optimization_objective" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjective"></a>

```python
optimization_objective: str
```

- *Type:* str

---

##### `training_state`<sup>Required</sup> <a name="training_state" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingState"></a>

```python
training_state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

---


### GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference <a name="GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_recommendation_engine

googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDiscoveryEngineRecommendationEngineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineRecommendationEngine.GoogleDiscoveryEngineRecommendationEngineTimeouts">GoogleDiscoveryEngineRecommendationEngineTimeouts</a>]

---



