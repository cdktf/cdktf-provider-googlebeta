# `googleApihubPlugin` Submodule <a name="`googleApihubPlugin` Submodule" id="@cdktf/provider-google-beta.googleApihubPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApihubPlugin <a name="GoogleApihubPlugin" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin google_apihub_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPlugin(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  location: str,
  plugin_id: str,
  actions_config: IResolvable | typing.List[GoogleApihubPluginActionsConfig] = None,
  config_template: GoogleApihubPluginConfigTemplate = None,
  description: str = None,
  documentation: GoogleApihubPluginDocumentation = None,
  hosting_service: GoogleApihubPluginHostingService = None,
  id: str = None,
  plugin_category: str = None,
  project: str = None,
  timeouts: GoogleApihubPluginTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the plugin. Max length is 50 characters (Unicode code points). |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.pluginId">plugin_id</a></code> | <code>str</code> | The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.actionsConfig">actions_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>]</code> | actions_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.configTemplate">config_template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a></code> | config_template block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.description">description</a></code> | <code>str</code> | The plugin description. Max length is 2000 characters (Unicode code points). |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a></code> | documentation block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.hostingService">hosting_service</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a></code> | hosting_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#id GoogleApihubPlugin#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.pluginCategory">plugin_category</a></code> | <code>str</code> | Possible values: PLUGIN_CATEGORY_UNSPECIFIED API_GATEWAY API_PRODUCER. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#project GoogleApihubPlugin#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the plugin. Max length is 50 characters (Unicode code points).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#display_name GoogleApihubPlugin#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#location GoogleApihubPlugin#location}

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.pluginId"></a>

- *Type:* str

The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified id is already used by another Plugin resource in the API hub
  instance.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, overall resource name which will be
of format
'projects/{project}/locations/{location}/plugins/{plugin}',
its length is limited to 1000 characters and valid characters are
/a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#plugin_id GoogleApihubPlugin#plugin_id}

---

##### `actions_config`<sup>Optional</sup> <a name="actions_config" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.actionsConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>]

actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#actions_config GoogleApihubPlugin#actions_config}

---

##### `config_template`<sup>Optional</sup> <a name="config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.configTemplate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a>

config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#config_template GoogleApihubPlugin#config_template}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.description"></a>

- *Type:* str

The plugin description. Max length is 2000 characters (Unicode code points).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#description GoogleApihubPlugin#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.documentation"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a>

documentation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#documentation GoogleApihubPlugin#documentation}

---

##### `hosting_service`<sup>Optional</sup> <a name="hosting_service" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.hostingService"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a>

hosting_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#hosting_service GoogleApihubPlugin#hosting_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#id GoogleApihubPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plugin_category`<sup>Optional</sup> <a name="plugin_category" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.pluginCategory"></a>

- *Type:* str

Possible values: PLUGIN_CATEGORY_UNSPECIFIED API_GATEWAY API_PRODUCER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#plugin_category GoogleApihubPlugin#plugin_category}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#project GoogleApihubPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#timeouts GoogleApihubPlugin#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putActionsConfig">put_actions_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putConfigTemplate">put_config_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putDocumentation">put_documentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putHostingService">put_hosting_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetActionsConfig">reset_actions_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetConfigTemplate">reset_config_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetDocumentation">reset_documentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetHostingService">reset_hosting_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetPluginCategory">reset_plugin_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions_config` <a name="put_actions_config" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putActionsConfig"></a>

```python
def put_actions_config(
  value: IResolvable | typing.List[GoogleApihubPluginActionsConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putActionsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>]

---

##### `put_config_template` <a name="put_config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putConfigTemplate"></a>

```python
def put_config_template(
  additional_config_template: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplate] = None,
  auth_config_template: GoogleApihubPluginConfigTemplateAuthConfigTemplate = None
) -> None
```

###### `additional_config_template`<sup>Optional</sup> <a name="additional_config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putConfigTemplate.parameter.additionalConfigTemplate"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>]

additional_config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#additional_config_template GoogleApihubPlugin#additional_config_template}

---

###### `auth_config_template`<sup>Optional</sup> <a name="auth_config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putConfigTemplate.parameter.authConfigTemplate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate">GoogleApihubPluginConfigTemplateAuthConfigTemplate</a>

auth_config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#auth_config_template GoogleApihubPlugin#auth_config_template}

---

##### `put_documentation` <a name="put_documentation" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putDocumentation"></a>

```python
def put_documentation(
  external_uri: str = None
) -> None
```

###### `external_uri`<sup>Optional</sup> <a name="external_uri" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putDocumentation.parameter.externalUri"></a>

- *Type:* str

The uri of the externally hosted documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#external_uri GoogleApihubPlugin#external_uri}

---

##### `put_hosting_service` <a name="put_hosting_service" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putHostingService"></a>

```python
def put_hosting_service(
  service_uri: str = None
) -> None
```

###### `service_uri`<sup>Optional</sup> <a name="service_uri" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putHostingService.parameter.serviceUri"></a>

- *Type:* str

The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality.

This information is only required for
user defined plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#service_uri GoogleApihubPlugin#service_uri}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#create GoogleApihubPlugin#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#delete GoogleApihubPlugin#delete}.

---

##### `reset_actions_config` <a name="reset_actions_config" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetActionsConfig"></a>

```python
def reset_actions_config() -> None
```

##### `reset_config_template` <a name="reset_config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetConfigTemplate"></a>

```python
def reset_config_template() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_documentation` <a name="reset_documentation" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetDocumentation"></a>

```python
def reset_documentation() -> None
```

##### `reset_hosting_service` <a name="reset_hosting_service" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetHostingService"></a>

```python
def reset_hosting_service() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_plugin_category` <a name="reset_plugin_category" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetPluginCategory"></a>

```python
def reset_plugin_category() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleApihubPlugin resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPlugin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPlugin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPlugin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPlugin.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleApihubPlugin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApihubPlugin to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApihubPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApihubPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.actionsConfig">actions_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList">GoogleApihubPluginActionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.configTemplate">config_template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference">GoogleApihubPluginConfigTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference">GoogleApihubPluginDocumentationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.hostingService">hosting_service</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference">GoogleApihubPluginHostingServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.ownershipType">ownership_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference">GoogleApihubPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.actionsConfigInput">actions_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.configTemplateInput">config_template_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.documentationInput">documentation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.hostingServiceInput">hosting_service_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginCategoryInput">plugin_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginIdInput">plugin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginCategory">plugin_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginId">plugin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `actions_config`<sup>Required</sup> <a name="actions_config" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.actionsConfig"></a>

```python
actions_config: GoogleApihubPluginActionsConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList">GoogleApihubPluginActionsConfigList</a>

---

##### `config_template`<sup>Required</sup> <a name="config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.configTemplate"></a>

```python
config_template: GoogleApihubPluginConfigTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference">GoogleApihubPluginConfigTemplateOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.documentation"></a>

```python
documentation: GoogleApihubPluginDocumentationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference">GoogleApihubPluginDocumentationOutputReference</a>

---

##### `hosting_service`<sup>Required</sup> <a name="hosting_service" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.hostingService"></a>

```python
hosting_service: GoogleApihubPluginHostingServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference">GoogleApihubPluginHostingServiceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ownership_type`<sup>Required</sup> <a name="ownership_type" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.ownershipType"></a>

```python
ownership_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.timeouts"></a>

```python
timeouts: GoogleApihubPluginTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference">GoogleApihubPluginTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `actions_config_input`<sup>Optional</sup> <a name="actions_config_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.actionsConfigInput"></a>

```python
actions_config_input: IResolvable | typing.List[GoogleApihubPluginActionsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>]

---

##### `config_template_input`<sup>Optional</sup> <a name="config_template_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.configTemplateInput"></a>

```python
config_template_input: GoogleApihubPluginConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `documentation_input`<sup>Optional</sup> <a name="documentation_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.documentationInput"></a>

```python
documentation_input: GoogleApihubPluginDocumentation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a>

---

##### `hosting_service_input`<sup>Optional</sup> <a name="hosting_service_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.hostingServiceInput"></a>

```python
hosting_service_input: GoogleApihubPluginHostingService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `plugin_category_input`<sup>Optional</sup> <a name="plugin_category_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginCategoryInput"></a>

```python
plugin_category_input: str
```

- *Type:* str

---

##### `plugin_id_input`<sup>Optional</sup> <a name="plugin_id_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginIdInput"></a>

```python
plugin_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleApihubPluginTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `plugin_category`<sup>Required</sup> <a name="plugin_category" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginCategory"></a>

```python
plugin_category: str
```

- *Type:* str

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPlugin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApihubPluginActionsConfig <a name="GoogleApihubPluginActionsConfig" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginActionsConfig(
  description: str,
  display_name: str,
  id: str,
  trigger_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.description">description</a></code> | <code>str</code> | The description of the operation performed by the action. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the action. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.id">id</a></code> | <code>str</code> | The id of the action. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.triggerMode">trigger_mode</a></code> | <code>str</code> | The trigger mode supported by the action. Possible values: TRIGGER_MODE_UNSPECIFIED API_HUB_ON_DEMAND_TRIGGER API_HUB_SCHEDULE_TRIGGER NON_API_HUB_MANAGED. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the operation performed by the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#description GoogleApihubPlugin#description}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#display_name GoogleApihubPlugin#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The id of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#id GoogleApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `trigger_mode`<sup>Required</sup> <a name="trigger_mode" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig.property.triggerMode"></a>

```python
trigger_mode: str
```

- *Type:* str

The trigger mode supported by the action. Possible values: TRIGGER_MODE_UNSPECIFIED API_HUB_ON_DEMAND_TRIGGER API_HUB_SCHEDULE_TRIGGER NON_API_HUB_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#trigger_mode GoogleApihubPlugin#trigger_mode}

---

### GoogleApihubPluginConfig <a name="GoogleApihubPluginConfig" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  location: str,
  plugin_id: str,
  actions_config: IResolvable | typing.List[GoogleApihubPluginActionsConfig] = None,
  config_template: GoogleApihubPluginConfigTemplate = None,
  description: str = None,
  documentation: GoogleApihubPluginDocumentation = None,
  hosting_service: GoogleApihubPluginHostingService = None,
  id: str = None,
  plugin_category: str = None,
  project: str = None,
  timeouts: GoogleApihubPluginTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the plugin. Max length is 50 characters (Unicode code points). |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.pluginId">plugin_id</a></code> | <code>str</code> | The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.actionsConfig">actions_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>]</code> | actions_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.configTemplate">config_template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a></code> | config_template block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.description">description</a></code> | <code>str</code> | The plugin description. Max length is 2000 characters (Unicode code points). |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a></code> | documentation block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.hostingService">hosting_service</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a></code> | hosting_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#id GoogleApihubPlugin#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.pluginCategory">plugin_category</a></code> | <code>str</code> | Possible values: PLUGIN_CATEGORY_UNSPECIFIED API_GATEWAY API_PRODUCER. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#project GoogleApihubPlugin#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the plugin. Max length is 50 characters (Unicode code points).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#display_name GoogleApihubPlugin#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#location GoogleApihubPlugin#location}

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified id is already used by another Plugin resource in the API hub
  instance.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, overall resource name which will be
of format
'projects/{project}/locations/{location}/plugins/{plugin}',
its length is limited to 1000 characters and valid characters are
/a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#plugin_id GoogleApihubPlugin#plugin_id}

---

##### `actions_config`<sup>Optional</sup> <a name="actions_config" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.actionsConfig"></a>

```python
actions_config: IResolvable | typing.List[GoogleApihubPluginActionsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>]

actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#actions_config GoogleApihubPlugin#actions_config}

---

##### `config_template`<sup>Optional</sup> <a name="config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.configTemplate"></a>

```python
config_template: GoogleApihubPluginConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a>

config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#config_template GoogleApihubPlugin#config_template}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The plugin description. Max length is 2000 characters (Unicode code points).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#description GoogleApihubPlugin#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.documentation"></a>

```python
documentation: GoogleApihubPluginDocumentation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a>

documentation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#documentation GoogleApihubPlugin#documentation}

---

##### `hosting_service`<sup>Optional</sup> <a name="hosting_service" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.hostingService"></a>

```python
hosting_service: GoogleApihubPluginHostingService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a>

hosting_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#hosting_service GoogleApihubPlugin#hosting_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#id GoogleApihubPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plugin_category`<sup>Optional</sup> <a name="plugin_category" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.pluginCategory"></a>

```python
plugin_category: str
```

- *Type:* str

Possible values: PLUGIN_CATEGORY_UNSPECIFIED API_GATEWAY API_PRODUCER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#plugin_category GoogleApihubPlugin#plugin_category}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#project GoogleApihubPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfig.property.timeouts"></a>

```python
timeouts: GoogleApihubPluginTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#timeouts GoogleApihubPlugin#timeouts}

---

### GoogleApihubPluginConfigTemplate <a name="GoogleApihubPluginConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplate(
  additional_config_template: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplate] = None,
  auth_config_template: GoogleApihubPluginConfigTemplateAuthConfigTemplate = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate.property.additionalConfigTemplate">additional_config_template</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>]</code> | additional_config_template block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate.property.authConfigTemplate">auth_config_template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate">GoogleApihubPluginConfigTemplateAuthConfigTemplate</a></code> | auth_config_template block. |

---

##### `additional_config_template`<sup>Optional</sup> <a name="additional_config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate.property.additionalConfigTemplate"></a>

```python
additional_config_template: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplate]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>]

additional_config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#additional_config_template GoogleApihubPlugin#additional_config_template}

---

##### `auth_config_template`<sup>Optional</sup> <a name="auth_config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate.property.authConfigTemplate"></a>

```python
auth_config_template: GoogleApihubPluginConfigTemplateAuthConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate">GoogleApihubPluginConfigTemplateAuthConfigTemplate</a>

auth_config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#auth_config_template GoogleApihubPlugin#auth_config_template}

---

### GoogleApihubPluginConfigTemplateAdditionalConfigTemplate <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate(
  id: str,
  value_type: str,
  description: str = None,
  enum_options: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions] = None,
  multi_select_options: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions] = None,
  required: bool | IResolvable = None,
  validation_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.id">id</a></code> | <code>str</code> | ID of the config variable. Must be unique within the configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.valueType">value_type</a></code> | <code>str</code> | Type of the parameter: string, int, bool etc. Possible values: VALUE_TYPE_UNSPECIFIED STRING INT BOOL SECRET ENUM MULTI_SELECT MULTI_STRING MULTI_INT. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.description">description</a></code> | <code>str</code> | Description. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.enumOptions">enum_options</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]</code> | enum_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.multiSelectOptions">multi_select_options</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]</code> | multi_select_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.required">required</a></code> | <code>bool \| cdktf.IResolvable</code> | Flag represents that this 'ConfigVariable' must be provided for a PluginInstance. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.validationRegex">validation_regex</a></code> | <code>str</code> | Regular expression in RE2 syntax used for validating the 'value' of a 'ConfigVariable'. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

ID of the config variable. Must be unique within the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#id GoogleApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

Type of the parameter: string, int, bool etc. Possible values: VALUE_TYPE_UNSPECIFIED STRING INT BOOL SECRET ENUM MULTI_SELECT MULTI_STRING MULTI_INT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#value_type GoogleApihubPlugin#value_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#description GoogleApihubPlugin#description}

---

##### `enum_options`<sup>Optional</sup> <a name="enum_options" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.enumOptions"></a>

```python
enum_options: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]

enum_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#enum_options GoogleApihubPlugin#enum_options}

---

##### `multi_select_options`<sup>Optional</sup> <a name="multi_select_options" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.multiSelectOptions"></a>

```python
multi_select_options: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]

multi_select_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#multi_select_options GoogleApihubPlugin#multi_select_options}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Flag represents that this 'ConfigVariable' must be provided for a PluginInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#required GoogleApihubPlugin#required}

---

##### `validation_regex`<sup>Optional</sup> <a name="validation_regex" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate.property.validationRegex"></a>

```python
validation_regex: str
```

- *Type:* str

Regular expression in RE2 syntax used for validating the 'value' of a 'ConfigVariable'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#validation_regex GoogleApihubPlugin#validation_regex}

---

### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions(
  display_name: str,
  id: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.displayName">display_name</a></code> | <code>str</code> | Display name of the option. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.id">id</a></code> | <code>str</code> | Id of the option. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.description">description</a></code> | <code>str</code> | Description of the option. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#display_name GoogleApihubPlugin#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.id"></a>

```python
id: str
```

- *Type:* str

Id of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#id GoogleApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#description GoogleApihubPlugin#description}

---

### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions(
  display_name: str,
  id: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.displayName">display_name</a></code> | <code>str</code> | Display name of the option. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.id">id</a></code> | <code>str</code> | Id of the option. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.description">description</a></code> | <code>str</code> | Description of the option. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#display_name GoogleApihubPlugin#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.id"></a>

```python
id: str
```

- *Type:* str

Id of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#id GoogleApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#description GoogleApihubPlugin#description}

---

### GoogleApihubPluginConfigTemplateAuthConfigTemplate <a name="GoogleApihubPluginConfigTemplateAuthConfigTemplate" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate(
  supported_auth_types: typing.List[str],
  service_account: GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate.property.supportedAuthTypes">supported_auth_types</a></code> | <code>typing.List[str]</code> | The list of authentication types supported by the plugin. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate.property.serviceAccount">service_account</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | service_account block. |

---

##### `supported_auth_types`<sup>Required</sup> <a name="supported_auth_types" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate.property.supportedAuthTypes"></a>

```python
supported_auth_types: typing.List[str]
```

- *Type:* typing.List[str]

The list of authentication types supported by the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#supported_auth_types GoogleApihubPlugin#supported_auth_types}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate.property.serviceAccount"></a>

```python
service_account: GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#service_account GoogleApihubPlugin#service_account}

---

### GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount <a name="GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount(
  service_account: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.property.serviceAccount">service_account</a></code> | <code>str</code> | The service account to be used for authenticating request. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The service account to be used for authenticating request.

The 'iam.serviceAccounts.getAccessToken' permission should be granted on
this service account to the impersonator service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#service_account GoogleApihubPlugin#service_account}

---

### GoogleApihubPluginDocumentation <a name="GoogleApihubPluginDocumentation" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginDocumentation(
  external_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation.property.externalUri">external_uri</a></code> | <code>str</code> | The uri of the externally hosted documentation. |

---

##### `external_uri`<sup>Optional</sup> <a name="external_uri" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation.property.externalUri"></a>

```python
external_uri: str
```

- *Type:* str

The uri of the externally hosted documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#external_uri GoogleApihubPlugin#external_uri}

---

### GoogleApihubPluginHostingService <a name="GoogleApihubPluginHostingService" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginHostingService(
  service_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService.property.serviceUri">service_uri</a></code> | <code>str</code> | The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality. |

---

##### `service_uri`<sup>Optional</sup> <a name="service_uri" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService.property.serviceUri"></a>

```python
service_uri: str
```

- *Type:* str

The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality.

This information is only required for
user defined plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#service_uri GoogleApihubPlugin#service_uri}

---

### GoogleApihubPluginTimeouts <a name="GoogleApihubPluginTimeouts" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#create GoogleApihubPlugin#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#delete GoogleApihubPlugin#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#create GoogleApihubPlugin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#delete GoogleApihubPlugin#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApihubPluginActionsConfigList <a name="GoogleApihubPluginActionsConfigList" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginActionsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApihubPluginActionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleApihubPluginActionsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>]

---


### GoogleApihubPluginActionsConfigOutputReference <a name="GoogleApihubPluginActionsConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.triggerModeInput">trigger_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.triggerMode">trigger_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `trigger_mode_input`<sup>Optional</sup> <a name="trigger_mode_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.triggerModeInput"></a>

```python
trigger_mode_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `trigger_mode`<sup>Required</sup> <a name="trigger_mode" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.triggerMode"></a>

```python
trigger_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleApihubPluginActionsConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginActionsConfig">GoogleApihubPluginActionsConfig</a>

---


### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]

---


### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>

---


### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplate]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>]

---


### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]

---


### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>

---


### GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference <a name="GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions">put_enum_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions">put_multi_select_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetEnumOptions">reset_enum_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetMultiSelectOptions">reset_multi_select_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetValidationRegex">reset_validation_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_enum_options` <a name="put_enum_options" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions"></a>

```python
def put_enum_options(
  value: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]

---

##### `put_multi_select_options` <a name="put_multi_select_options" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions"></a>

```python
def put_multi_select_options(
  value: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enum_options` <a name="reset_enum_options" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetEnumOptions"></a>

```python
def reset_enum_options() -> None
```

##### `reset_multi_select_options` <a name="reset_multi_select_options" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetMultiSelectOptions"></a>

```python
def reset_multi_select_options() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_validation_regex` <a name="reset_validation_regex" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetValidationRegex"></a>

```python
def reset_validation_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptions">enum_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptions">multi_select_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptionsInput">enum_options_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptionsInput">multi_select_options_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.requiredInput">required_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegexInput">validation_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.required">required</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegex">validation_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enum_options`<sup>Required</sup> <a name="enum_options" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptions"></a>

```python
enum_options: GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList</a>

---

##### `multi_select_options`<sup>Required</sup> <a name="multi_select_options" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptions"></a>

```python
multi_select_options: GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enum_options_input`<sup>Optional</sup> <a name="enum_options_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptionsInput"></a>

```python
enum_options_input: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `multi_select_options_input`<sup>Optional</sup> <a name="multi_select_options_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptionsInput"></a>

```python
multi_select_options_input: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>]

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.requiredInput"></a>

```python
required_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `validation_regex_input`<sup>Optional</sup> <a name="validation_regex_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegexInput"></a>

```python
validation_regex_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `validation_regex`<sup>Required</sup> <a name="validation_regex" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegex"></a>

```python
validation_regex: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleApihubPluginConfigTemplateAdditionalConfigTemplate
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>

---


### GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference <a name="GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount">put_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_service_account` <a name="put_service_account" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount"></a>

```python
def put_service_account(
  service_account: str
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount.parameter.serviceAccount"></a>

- *Type:* str

The service account to be used for authenticating request.

The 'iam.serviceAccounts.getAccessToken' permission should be granted on
this service account to the impersonator service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#service_account GoogleApihubPlugin#service_account}

---

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccount">service_account</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypesInput">supported_auth_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypes">supported_auth_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate">GoogleApihubPluginConfigTemplateAuthConfigTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccount"></a>

```python
service_account: GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

---

##### `supported_auth_types_input`<sup>Optional</sup> <a name="supported_auth_types_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypesInput"></a>

```python
supported_auth_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_auth_types`<sup>Required</sup> <a name="supported_auth_types" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypes"></a>

```python
supported_auth_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginConfigTemplateAuthConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate">GoogleApihubPluginConfigTemplateAuthConfigTemplate</a>

---


### GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference <a name="GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

---


### GoogleApihubPluginConfigTemplateOutputReference <a name="GoogleApihubPluginConfigTemplateOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate">put_additional_config_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate">put_auth_config_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.resetAdditionalConfigTemplate">reset_additional_config_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.resetAuthConfigTemplate">reset_auth_config_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_config_template` <a name="put_additional_config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate"></a>

```python
def put_additional_config_template(
  value: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplate]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>]

---

##### `put_auth_config_template` <a name="put_auth_config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate"></a>

```python
def put_auth_config_template(
  supported_auth_types: typing.List[str],
  service_account: GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount = None
) -> None
```

###### `supported_auth_types`<sup>Required</sup> <a name="supported_auth_types" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate.parameter.supportedAuthTypes"></a>

- *Type:* typing.List[str]

The list of authentication types supported by the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#supported_auth_types GoogleApihubPlugin#supported_auth_types}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate.parameter.serviceAccount"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">GoogleApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apihub_plugin#service_account GoogleApihubPlugin#service_account}

---

##### `reset_additional_config_template` <a name="reset_additional_config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.resetAdditionalConfigTemplate"></a>

```python
def reset_additional_config_template() -> None
```

##### `reset_auth_config_template` <a name="reset_auth_config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.resetAuthConfigTemplate"></a>

```python
def reset_auth_config_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplate">additional_config_template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.authConfigTemplate">auth_config_template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference">GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplateInput">additional_config_template_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.authConfigTemplateInput">auth_config_template_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate">GoogleApihubPluginConfigTemplateAuthConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_config_template`<sup>Required</sup> <a name="additional_config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplate"></a>

```python
additional_config_template: GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList">GoogleApihubPluginConfigTemplateAdditionalConfigTemplateList</a>

---

##### `auth_config_template`<sup>Required</sup> <a name="auth_config_template" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.authConfigTemplate"></a>

```python
auth_config_template: GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference">GoogleApihubPluginConfigTemplateAuthConfigTemplateOutputReference</a>

---

##### `additional_config_template_input`<sup>Optional</sup> <a name="additional_config_template_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplateInput"></a>

```python
additional_config_template_input: IResolvable | typing.List[GoogleApihubPluginConfigTemplateAdditionalConfigTemplate]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAdditionalConfigTemplate">GoogleApihubPluginConfigTemplateAdditionalConfigTemplate</a>]

---

##### `auth_config_template_input`<sup>Optional</sup> <a name="auth_config_template_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.authConfigTemplateInput"></a>

```python
auth_config_template_input: GoogleApihubPluginConfigTemplateAuthConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateAuthConfigTemplate">GoogleApihubPluginConfigTemplateAuthConfigTemplate</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginConfigTemplate">GoogleApihubPluginConfigTemplate</a>

---


### GoogleApihubPluginDocumentationOutputReference <a name="GoogleApihubPluginDocumentationOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.resetExternalUri">reset_external_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_external_uri` <a name="reset_external_uri" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.resetExternalUri"></a>

```python
def reset_external_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.externalUriInput">external_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.externalUri">external_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_uri_input`<sup>Optional</sup> <a name="external_uri_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.externalUriInput"></a>

```python
external_uri_input: str
```

- *Type:* str

---

##### `external_uri`<sup>Required</sup> <a name="external_uri" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.externalUri"></a>

```python
external_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginDocumentation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginDocumentation">GoogleApihubPluginDocumentation</a>

---


### GoogleApihubPluginHostingServiceOutputReference <a name="GoogleApihubPluginHostingServiceOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.resetServiceUri">reset_service_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_uri` <a name="reset_service_uri" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.resetServiceUri"></a>

```python
def reset_service_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.serviceUriInput">service_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.serviceUri">service_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_uri_input`<sup>Optional</sup> <a name="service_uri_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.serviceUriInput"></a>

```python
service_uri_input: str
```

- *Type:* str

---

##### `service_uri`<sup>Required</sup> <a name="service_uri" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.serviceUri"></a>

```python
service_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingServiceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginHostingService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginHostingService">GoogleApihubPluginHostingService</a>

---


### GoogleApihubPluginTimeoutsOutputReference <a name="GoogleApihubPluginTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin

googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleApihubPluginTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApihubPlugin.GoogleApihubPluginTimeouts">GoogleApihubPluginTimeouts</a>

---



