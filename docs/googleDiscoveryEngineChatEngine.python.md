# `googleDiscoveryEngineChatEngine` Submodule <a name="`googleDiscoveryEngineChatEngine` Submodule" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineChatEngine <a name="GoogleDiscoveryEngineChatEngine" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine google_discovery_engine_chat_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  chat_engine_config: GoogleDiscoveryEngineChatEngineChatEngineConfig,
  collection_id: str,
  data_store_ids: typing.List[str],
  display_name: str,
  engine_id: str,
  location: str,
  common_config: GoogleDiscoveryEngineChatEngineCommonConfig = None,
  id: str = None,
  industry_vertical: str = None,
  project: str = None,
  timeouts: GoogleDiscoveryEngineChatEngineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.chatEngineConfig">chat_engine_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a></code> | chat_engine_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The collection ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.engineId">engine_id</a></code> | <code>str</code> | The ID to use for chat engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.location">location</a></code> | <code>str</code> | Location. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.commonConfig">common_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#id GoogleDiscoveryEngineChatEngine#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the chat engine registers. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#project GoogleDiscoveryEngineChatEngine#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `chat_engine_config`<sup>Required</sup> <a name="chat_engine_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.chatEngineConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a>

chat_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#chat_engine_config GoogleDiscoveryEngineChatEngine#chat_engine_config}

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.collectionId"></a>

- *Type:* str

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#collection_id GoogleDiscoveryEngineChatEngine#collection_id}

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.dataStoreIds"></a>

- *Type:* typing.List[str]

The data stores associated with this engine.

Multiple DataStores in the same Collection can be associated here. All listed DataStores must be 'SOLUTION_TYPE_CHAT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#data_store_ids GoogleDiscoveryEngineChatEngine#data_store_ids}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#display_name GoogleDiscoveryEngineChatEngine#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.engineId"></a>

- *Type:* str

The ID to use for chat engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#engine_id GoogleDiscoveryEngineChatEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.location"></a>

- *Type:* str

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#location GoogleDiscoveryEngineChatEngine#location}

---

##### `common_config`<sup>Optional</sup> <a name="common_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.commonConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#common_config GoogleDiscoveryEngineChatEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#id GoogleDiscoveryEngineChatEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industry_vertical`<sup>Optional</sup> <a name="industry_vertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.industryVertical"></a>

- *Type:* str

The industry vertical that the chat engine registers.

Vertical on Engine has to match vertical of the DataStore linked to the engine. Default value: "GENERIC" Possible values: ["GENERIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#industry_vertical GoogleDiscoveryEngineChatEngine#industry_vertical}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#project GoogleDiscoveryEngineChatEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#timeouts GoogleDiscoveryEngineChatEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putChatEngineConfig">put_chat_engine_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putCommonConfig">put_common_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetCommonConfig">reset_common_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetIndustryVertical">reset_industry_vertical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_chat_engine_config` <a name="put_chat_engine_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putChatEngineConfig"></a>

```python
def put_chat_engine_config(
  agent_creation_config: GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig = None,
  dialogflow_agent_to_link: str = None
) -> None
```

###### `agent_creation_config`<sup>Optional</sup> <a name="agent_creation_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putChatEngineConfig.parameter.agentCreationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

agent_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#agent_creation_config GoogleDiscoveryEngineChatEngine#agent_creation_config}

---

###### `dialogflow_agent_to_link`<sup>Optional</sup> <a name="dialogflow_agent_to_link" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putChatEngineConfig.parameter.dialogflowAgentToLink"></a>

- *Type:* str

The resource name of an existing Dialogflow agent to link to this Chat Engine.

Format: 'projects/<Project_ID>/locations/<Location_ID>/agents/<Agent_ID>'.
Exactly one of 'agent_creation_config' or 'dialogflow_agent_to_link' must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#dialogflow_agent_to_link GoogleDiscoveryEngineChatEngine#dialogflow_agent_to_link}

---

##### `put_common_config` <a name="put_common_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putCommonConfig"></a>

```python
def put_common_config(
  company_name: str = None
) -> None
```

###### `company_name`<sup>Optional</sup> <a name="company_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putCommonConfig.parameter.companyName"></a>

- *Type:* str

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#company_name GoogleDiscoveryEngineChatEngine#company_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#create GoogleDiscoveryEngineChatEngine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#delete GoogleDiscoveryEngineChatEngine#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#update GoogleDiscoveryEngineChatEngine#update}.

---

##### `reset_common_config` <a name="reset_common_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetCommonConfig"></a>

```python
def reset_common_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_industry_vertical` <a name="reset_industry_vertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetIndustryVertical"></a>

```python
def reset_industry_vertical() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDiscoveryEngineChatEngine resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDiscoveryEngineChatEngine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDiscoveryEngineChatEngine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDiscoveryEngineChatEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineChatEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.chatEngineConfig">chat_engine_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference">GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.chatEngineMetadata">chat_engine_metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList">GoogleDiscoveryEngineChatEngineChatEngineMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.commonConfig">common_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference">GoogleDiscoveryEngineChatEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference">GoogleDiscoveryEngineChatEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.chatEngineConfigInput">chat_engine_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.commonConfigInput">common_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.dataStoreIdsInput">data_store_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.engineIdInput">engine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.industryVerticalInput">industry_vertical_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.engineId">engine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.industryVertical">industry_vertical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `chat_engine_config`<sup>Required</sup> <a name="chat_engine_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.chatEngineConfig"></a>

```python
chat_engine_config: GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference">GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference</a>

---

##### `chat_engine_metadata`<sup>Required</sup> <a name="chat_engine_metadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.chatEngineMetadata"></a>

```python
chat_engine_metadata: GoogleDiscoveryEngineChatEngineChatEngineMetadataList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList">GoogleDiscoveryEngineChatEngineChatEngineMetadataList</a>

---

##### `common_config`<sup>Required</sup> <a name="common_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.commonConfig"></a>

```python
common_config: GoogleDiscoveryEngineChatEngineCommonConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference">GoogleDiscoveryEngineChatEngineCommonConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineChatEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference">GoogleDiscoveryEngineChatEngineTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `chat_engine_config_input`<sup>Optional</sup> <a name="chat_engine_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.chatEngineConfigInput"></a>

```python
chat_engine_config_input: GoogleDiscoveryEngineChatEngineChatEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a>

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `common_config_input`<sup>Optional</sup> <a name="common_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.commonConfigInput"></a>

```python
common_config_input: GoogleDiscoveryEngineChatEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a>

---

##### `data_store_ids_input`<sup>Optional</sup> <a name="data_store_ids_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.dataStoreIdsInput"></a>

```python
data_store_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `engine_id_input`<sup>Optional</sup> <a name="engine_id_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.engineIdInput"></a>

```python
engine_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `industry_vertical_input`<sup>Optional</sup> <a name="industry_vertical_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.industryVerticalInput"></a>

```python
industry_vertical_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDiscoveryEngineChatEngineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a>]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.dataStoreIds"></a>

```python
data_store_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineChatEngineChatEngineConfig <a name="GoogleDiscoveryEngineChatEngineChatEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig(
  agent_creation_config: GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig = None,
  dialogflow_agent_to_link: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig.property.agentCreationConfig">agent_creation_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | agent_creation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig.property.dialogflowAgentToLink">dialogflow_agent_to_link</a></code> | <code>str</code> | The resource name of an existing Dialogflow agent to link to this Chat Engine. |

---

##### `agent_creation_config`<sup>Optional</sup> <a name="agent_creation_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig.property.agentCreationConfig"></a>

```python
agent_creation_config: GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

agent_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#agent_creation_config GoogleDiscoveryEngineChatEngine#agent_creation_config}

---

##### `dialogflow_agent_to_link`<sup>Optional</sup> <a name="dialogflow_agent_to_link" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig.property.dialogflowAgentToLink"></a>

```python
dialogflow_agent_to_link: str
```

- *Type:* str

The resource name of an existing Dialogflow agent to link to this Chat Engine.

Format: 'projects/<Project_ID>/locations/<Location_ID>/agents/<Agent_ID>'.
Exactly one of 'agent_creation_config' or 'dialogflow_agent_to_link' must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#dialogflow_agent_to_link GoogleDiscoveryEngineChatEngine#dialogflow_agent_to_link}

---

### GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig <a name="GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig(
  default_language_code: str,
  time_zone: str,
  business: str = None,
  location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.business">business</a></code> | <code>str</code> | Name of the company, organization or other entity that the agent represents. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.location">location</a></code> | <code>str</code> | Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine. |

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.defaultLanguageCode"></a>

```python
default_language_code: str
```

- *Type:* str

The default language of the agent as a language tag.

See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#default_language_code GoogleDiscoveryEngineChatEngine#default_language_code}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#time_zone GoogleDiscoveryEngineChatEngine#time_zone}

---

##### `business`<sup>Optional</sup> <a name="business" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.business"></a>

```python
business: str
```

- *Type:* str

Name of the company, organization or other entity that the agent represents.

Used for knowledge connector LLM prompt and for knowledge search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#business GoogleDiscoveryEngineChatEngine#business}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#location GoogleDiscoveryEngineChatEngine#location}

---

### GoogleDiscoveryEngineChatEngineChatEngineMetadata <a name="GoogleDiscoveryEngineChatEngineChatEngineMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadata()
```


### GoogleDiscoveryEngineChatEngineCommonConfig <a name="GoogleDiscoveryEngineChatEngineCommonConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig(
  company_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig.property.companyName">company_name</a></code> | <code>str</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `company_name`<sup>Optional</sup> <a name="company_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#company_name GoogleDiscoveryEngineChatEngine#company_name}

---

### GoogleDiscoveryEngineChatEngineConfig <a name="GoogleDiscoveryEngineChatEngineConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  chat_engine_config: GoogleDiscoveryEngineChatEngineChatEngineConfig,
  collection_id: str,
  data_store_ids: typing.List[str],
  display_name: str,
  engine_id: str,
  location: str,
  common_config: GoogleDiscoveryEngineChatEngineCommonConfig = None,
  id: str = None,
  industry_vertical: str = None,
  project: str = None,
  timeouts: GoogleDiscoveryEngineChatEngineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.chatEngineConfig">chat_engine_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a></code> | chat_engine_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The collection ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.engineId">engine_id</a></code> | <code>str</code> | The ID to use for chat engine. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.location">location</a></code> | <code>str</code> | Location. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.commonConfig">common_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#id GoogleDiscoveryEngineChatEngine#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the chat engine registers. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#project GoogleDiscoveryEngineChatEngine#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `chat_engine_config`<sup>Required</sup> <a name="chat_engine_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.chatEngineConfig"></a>

```python
chat_engine_config: GoogleDiscoveryEngineChatEngineChatEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a>

chat_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#chat_engine_config GoogleDiscoveryEngineChatEngine#chat_engine_config}

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#collection_id GoogleDiscoveryEngineChatEngine#collection_id}

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.dataStoreIds"></a>

```python
data_store_ids: typing.List[str]
```

- *Type:* typing.List[str]

The data stores associated with this engine.

Multiple DataStores in the same Collection can be associated here. All listed DataStores must be 'SOLUTION_TYPE_CHAT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#data_store_ids GoogleDiscoveryEngineChatEngine#data_store_ids}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#display_name GoogleDiscoveryEngineChatEngine#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

The ID to use for chat engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#engine_id GoogleDiscoveryEngineChatEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#location GoogleDiscoveryEngineChatEngine#location}

---

##### `common_config`<sup>Optional</sup> <a name="common_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.commonConfig"></a>

```python
common_config: GoogleDiscoveryEngineChatEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#common_config GoogleDiscoveryEngineChatEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#id GoogleDiscoveryEngineChatEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industry_vertical`<sup>Optional</sup> <a name="industry_vertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

The industry vertical that the chat engine registers.

Vertical on Engine has to match vertical of the DataStore linked to the engine. Default value: "GENERIC" Possible values: ["GENERIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#industry_vertical GoogleDiscoveryEngineChatEngine#industry_vertical}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#project GoogleDiscoveryEngineChatEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineConfig.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineChatEngineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#timeouts GoogleDiscoveryEngineChatEngine#timeouts}

---

### GoogleDiscoveryEngineChatEngineTimeouts <a name="GoogleDiscoveryEngineChatEngineTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#create GoogleDiscoveryEngineChatEngine#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#delete GoogleDiscoveryEngineChatEngine#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#update GoogleDiscoveryEngineChatEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#create GoogleDiscoveryEngineChatEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#delete GoogleDiscoveryEngineChatEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#update GoogleDiscoveryEngineChatEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference <a name="GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetBusiness">reset_business</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetLocation">reset_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_business` <a name="reset_business" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetBusiness"></a>

```python
def reset_business() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.businessInput">business_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCodeInput">default_language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.business">business</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `business_input`<sup>Optional</sup> <a name="business_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.businessInput"></a>

```python
business_input: str
```

- *Type:* str

---

##### `default_language_code_input`<sup>Optional</sup> <a name="default_language_code_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCodeInput"></a>

```python
default_language_code_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `business`<sup>Required</sup> <a name="business" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.business"></a>

```python
business: str
```

- *Type:* str

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCode"></a>

```python
default_language_code: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

---


### GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference <a name="GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig">put_agent_creation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.resetAgentCreationConfig">reset_agent_creation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.resetDialogflowAgentToLink">reset_dialogflow_agent_to_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_agent_creation_config` <a name="put_agent_creation_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig"></a>

```python
def put_agent_creation_config(
  default_language_code: str,
  time_zone: str,
  business: str = None,
  location: str = None
) -> None
```

###### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig.parameter.defaultLanguageCode"></a>

- *Type:* str

The default language of the agent as a language tag.

See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#default_language_code GoogleDiscoveryEngineChatEngine#default_language_code}

---

###### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig.parameter.timeZone"></a>

- *Type:* str

The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#time_zone GoogleDiscoveryEngineChatEngine#time_zone}

---

###### `business`<sup>Optional</sup> <a name="business" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig.parameter.business"></a>

- *Type:* str

Name of the company, organization or other entity that the agent represents.

Used for knowledge connector LLM prompt and for knowledge search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#business GoogleDiscoveryEngineChatEngine#business}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig.parameter.location"></a>

- *Type:* str

Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_discovery_engine_chat_engine#location GoogleDiscoveryEngineChatEngine#location}

---

##### `reset_agent_creation_config` <a name="reset_agent_creation_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.resetAgentCreationConfig"></a>

```python
def reset_agent_creation_config() -> None
```

##### `reset_dialogflow_agent_to_link` <a name="reset_dialogflow_agent_to_link" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.resetDialogflowAgentToLink"></a>

```python
def reset_dialogflow_agent_to_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfig">agent_creation_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfigInput">agent_creation_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLinkInput">dialogflow_agent_to_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLink">dialogflow_agent_to_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_creation_config`<sup>Required</sup> <a name="agent_creation_config" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfig"></a>

```python
agent_creation_config: GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference</a>

---

##### `agent_creation_config_input`<sup>Optional</sup> <a name="agent_creation_config_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfigInput"></a>

```python
agent_creation_config_input: GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">GoogleDiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

---

##### `dialogflow_agent_to_link_input`<sup>Optional</sup> <a name="dialogflow_agent_to_link_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLinkInput"></a>

```python
dialogflow_agent_to_link_input: str
```

- *Type:* str

---

##### `dialogflow_agent_to_link`<sup>Required</sup> <a name="dialogflow_agent_to_link" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLink"></a>

```python
dialogflow_agent_to_link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineChatEngineChatEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineConfig">GoogleDiscoveryEngineChatEngineChatEngineConfig</a>

---


### GoogleDiscoveryEngineChatEngineChatEngineMetadataList <a name="GoogleDiscoveryEngineChatEngineChatEngineMetadataList" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference <a name="GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.dialogflowAgent">dialogflow_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadata">GoogleDiscoveryEngineChatEngineChatEngineMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dialogflow_agent`<sup>Required</sup> <a name="dialogflow_agent" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.dialogflowAgent"></a>

```python
dialogflow_agent: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineChatEngineChatEngineMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineChatEngineMetadata">GoogleDiscoveryEngineChatEngineChatEngineMetadata</a>

---


### GoogleDiscoveryEngineChatEngineCommonConfigOutputReference <a name="GoogleDiscoveryEngineChatEngineCommonConfigOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.resetCompanyName">reset_company_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_company_name` <a name="reset_company_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.resetCompanyName"></a>

```python
def reset_company_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.companyNameInput">company_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `company_name_input`<sup>Optional</sup> <a name="company_name_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.companyNameInput"></a>

```python
company_name_input: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineChatEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineCommonConfig">GoogleDiscoveryEngineChatEngineCommonConfig</a>

---


### GoogleDiscoveryEngineChatEngineTimeoutsOutputReference <a name="GoogleDiscoveryEngineChatEngineTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_chat_engine

googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDiscoveryEngineChatEngineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineChatEngine.GoogleDiscoveryEngineChatEngineTimeouts">GoogleDiscoveryEngineChatEngineTimeouts</a>]

---



