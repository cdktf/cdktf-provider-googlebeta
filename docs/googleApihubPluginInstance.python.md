# `googleApihubPluginInstance` Submodule <a name="`googleApihubPluginInstance` Submodule" id="@cdktf/provider-google-beta.googleApihubPluginInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApihubPluginInstance <a name="GoogleApihubPluginInstance" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance google_apihub_plugin_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  plugin: str,
  plugin_instance_id: str,
  actions: typing.Union[IResolvable, typing.List[GoogleApihubPluginInstanceActions]] = None,
  auth_config: GoogleApihubPluginInstanceAuthConfig = None,
  disable: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleApihubPluginInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.plugin">plugin</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.pluginInstanceId">plugin_instance_id</a></code> | <code>str</code> | The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>]]</code> | actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.disable">disable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#id GoogleApihubPluginInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#project GoogleApihubPluginInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#display_name GoogleApihubPluginInstance#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#location GoogleApihubPluginInstance#location}

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.plugin"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#plugin GoogleApihubPluginInstance#plugin}

---

##### `plugin_instance_id`<sup>Required</sup> <a name="plugin_instance_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.pluginInstanceId"></a>

- *Type:* str

The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified id is already used by another plugin instance in the plugin
  resource.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, and valid characters
are /a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#plugin_instance_id GoogleApihubPluginInstance#plugin_instance_id}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.actions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#actions GoogleApihubPluginInstance#actions}

---

##### `auth_config`<sup>Optional</sup> <a name="auth_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.authConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#auth_config GoogleApihubPluginInstance#auth_config}

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.disable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#disable GoogleApihubPluginInstance#disable}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#id GoogleApihubPluginInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#project GoogleApihubPluginInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#timeouts GoogleApihubPluginInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig">put_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetAuthConfig">reset_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetDisable">reset_disable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions` <a name="put_actions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putActions"></a>

```python
def put_actions(
  value: typing.Union[IResolvable, typing.List[GoogleApihubPluginInstanceActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>]]

---

##### `put_auth_config` <a name="put_auth_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig"></a>

```python
def put_auth_config(
  auth_type: str,
  api_key_config: GoogleApihubPluginInstanceAuthConfigApiKeyConfig = None,
  google_service_account_config: GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig = None,
  oauth2_client_credentials_config: GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig = None,
  user_password_config: GoogleApihubPluginInstanceAuthConfigUserPasswordConfig = None
) -> None
```

###### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig.parameter.authType"></a>

- *Type:* str

Possible values: AUTH_TYPE_UNSPECIFIED NO_AUTH GOOGLE_SERVICE_ACCOUNT USER_PASSWORD API_KEY OAUTH2_CLIENT_CREDENTIALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#auth_type GoogleApihubPluginInstance#auth_type}

---

###### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig.parameter.apiKeyConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#api_key_config GoogleApihubPluginInstance#api_key_config}

---

###### `google_service_account_config`<sup>Optional</sup> <a name="google_service_account_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig.parameter.googleServiceAccountConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

google_service_account_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#google_service_account_config GoogleApihubPluginInstance#google_service_account_config}

---

###### `oauth2_client_credentials_config`<sup>Optional</sup> <a name="oauth2_client_credentials_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig.parameter.oauth2ClientCredentialsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

oauth2_client_credentials_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#oauth2_client_credentials_config GoogleApihubPluginInstance#oauth2_client_credentials_config}

---

###### `user_password_config`<sup>Optional</sup> <a name="user_password_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig.parameter.userPasswordConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

user_password_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#user_password_config GoogleApihubPluginInstance#user_password_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#create GoogleApihubPluginInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#delete GoogleApihubPluginInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#update GoogleApihubPluginInstance#update}.

---

##### `reset_actions` <a name="reset_actions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_auth_config` <a name="reset_auth_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetAuthConfig"></a>

```python
def reset_auth_config() -> None
```

##### `reset_disable` <a name="reset_disable" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetDisable"></a>

```python
def reset_disable() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleApihubPluginInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleApihubPluginInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApihubPluginInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApihubPluginInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApihubPluginInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList">GoogleApihubPluginInstanceActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference">GoogleApihubPluginInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actionsInput">actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfigInput">auth_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disableInput">disable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInput">plugin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceIdInput">plugin_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disable">disable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.plugin">plugin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceId">plugin_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actions"></a>

```python
actions: GoogleApihubPluginInstanceActionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList">GoogleApihubPluginInstanceActionsList</a>

---

##### `auth_config`<sup>Required</sup> <a name="auth_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfig"></a>

```python
auth_config: GoogleApihubPluginInstanceAuthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeouts"></a>

```python
timeouts: GoogleApihubPluginInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference">GoogleApihubPluginInstanceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actionsInput"></a>

```python
actions_input: typing.Union[IResolvable, typing.List[GoogleApihubPluginInstanceActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>]]

---

##### `auth_config_input`<sup>Optional</sup> <a name="auth_config_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfigInput"></a>

```python
auth_config_input: GoogleApihubPluginInstanceAuthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

---

##### `disable_input`<sup>Optional</sup> <a name="disable_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disableInput"></a>

```python
disable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `plugin_input`<sup>Optional</sup> <a name="plugin_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInput"></a>

```python
plugin_input: str
```

- *Type:* str

---

##### `plugin_instance_id_input`<sup>Optional</sup> <a name="plugin_instance_id_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceIdInput"></a>

```python
plugin_instance_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleApihubPluginInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>]

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disable"></a>

```python
disable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.plugin"></a>

```python
plugin: str
```

- *Type:* str

---

##### `plugin_instance_id`<sup>Required</sup> <a name="plugin_instance_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceId"></a>

```python
plugin_instance_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApihubPluginInstanceActions <a name="GoogleApihubPluginInstanceActions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceActions(
  action_id: str,
  curation_config: GoogleApihubPluginInstanceActionsCurationConfig = None,
  schedule_cron_expression: str = None,
  schedule_time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.actionId">action_id</a></code> | <code>str</code> | This should map to one of the action id specified in actions_config in the plugin. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.curationConfig">curation_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a></code> | curation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleCronExpression">schedule_cron_expression</a></code> | <code>str</code> | The schedule for this plugin instance action. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleTimeZone">schedule_time_zone</a></code> | <code>str</code> | The time zone for the schedule cron expression. If not provided, UTC will be used. |

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

This should map to one of the action id specified in actions_config in the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#action_id GoogleApihubPluginInstance#action_id}

---

##### `curation_config`<sup>Optional</sup> <a name="curation_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.curationConfig"></a>

```python
curation_config: GoogleApihubPluginInstanceActionsCurationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

curation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#curation_config GoogleApihubPluginInstance#curation_config}

---

##### `schedule_cron_expression`<sup>Optional</sup> <a name="schedule_cron_expression" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleCronExpression"></a>

```python
schedule_cron_expression: str
```

- *Type:* str

The schedule for this plugin instance action.

This can only be set if the
plugin supports API_HUB_SCHEDULE_TRIGGER mode for this action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#schedule_cron_expression GoogleApihubPluginInstance#schedule_cron_expression}

---

##### `schedule_time_zone`<sup>Optional</sup> <a name="schedule_time_zone" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleTimeZone"></a>

```python
schedule_time_zone: str
```

- *Type:* str

The time zone for the schedule cron expression. If not provided, UTC will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#schedule_time_zone GoogleApihubPluginInstance#schedule_time_zone}

---

### GoogleApihubPluginInstanceActionsCurationConfig <a name="GoogleApihubPluginInstanceActionsCurationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig(
  curation_type: str = None,
  custom_curation: GoogleApihubPluginInstanceActionsCurationConfigCustomCuration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.curationType">curation_type</a></code> | <code>str</code> | Possible values: CURATION_TYPE_UNSPECIFIED DEFAULT_CURATION_FOR_API_METADATA CUSTOM_CURATION_FOR_API_METADATA. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.customCuration">custom_curation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | custom_curation block. |

---

##### `curation_type`<sup>Optional</sup> <a name="curation_type" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.curationType"></a>

```python
curation_type: str
```

- *Type:* str

Possible values: CURATION_TYPE_UNSPECIFIED DEFAULT_CURATION_FOR_API_METADATA CUSTOM_CURATION_FOR_API_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#curation_type GoogleApihubPluginInstance#curation_type}

---

##### `custom_curation`<sup>Optional</sup> <a name="custom_curation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.customCuration"></a>

```python
custom_curation: GoogleApihubPluginInstanceActionsCurationConfigCustomCuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

custom_curation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#custom_curation GoogleApihubPluginInstance#custom_curation}

---

### GoogleApihubPluginInstanceActionsCurationConfigCustomCuration <a name="GoogleApihubPluginInstanceActionsCurationConfigCustomCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration(
  curation: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration.property.curation">curation</a></code> | <code>str</code> | The unique name of the curation resource. This will be the name of the curation resource in the format: 'projects/{project}/locations/{location}/curations/{curation}'. |

---

##### `curation`<sup>Required</sup> <a name="curation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration.property.curation"></a>

```python
curation: str
```

- *Type:* str

The unique name of the curation resource. This will be the name of the curation resource in the format: 'projects/{project}/locations/{location}/curations/{curation}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#curation GoogleApihubPluginInstance#curation}

---

### GoogleApihubPluginInstanceActionsHubInstanceAction <a name="GoogleApihubPluginInstanceActionsHubInstanceAction" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction()
```


### GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution <a name="GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution()
```


### GoogleApihubPluginInstanceAuthConfig <a name="GoogleApihubPluginInstanceAuthConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig(
  auth_type: str,
  api_key_config: GoogleApihubPluginInstanceAuthConfigApiKeyConfig = None,
  google_service_account_config: GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig = None,
  oauth2_client_credentials_config: GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig = None,
  user_password_config: GoogleApihubPluginInstanceAuthConfigUserPasswordConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.authType">auth_type</a></code> | <code>str</code> | Possible values: AUTH_TYPE_UNSPECIFIED NO_AUTH GOOGLE_SERVICE_ACCOUNT USER_PASSWORD API_KEY OAUTH2_CLIENT_CREDENTIALS. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.googleServiceAccountConfig">google_service_account_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | google_service_account_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.oauth2ClientCredentialsConfig">oauth2_client_credentials_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | oauth2_client_credentials_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.userPasswordConfig">user_password_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | user_password_config block. |

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Possible values: AUTH_TYPE_UNSPECIFIED NO_AUTH GOOGLE_SERVICE_ACCOUNT USER_PASSWORD API_KEY OAUTH2_CLIENT_CREDENTIALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#auth_type GoogleApihubPluginInstance#auth_type}

---

##### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.apiKeyConfig"></a>

```python
api_key_config: GoogleApihubPluginInstanceAuthConfigApiKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#api_key_config GoogleApihubPluginInstance#api_key_config}

---

##### `google_service_account_config`<sup>Optional</sup> <a name="google_service_account_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.googleServiceAccountConfig"></a>

```python
google_service_account_config: GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

google_service_account_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#google_service_account_config GoogleApihubPluginInstance#google_service_account_config}

---

##### `oauth2_client_credentials_config`<sup>Optional</sup> <a name="oauth2_client_credentials_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.oauth2ClientCredentialsConfig"></a>

```python
oauth2_client_credentials_config: GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

oauth2_client_credentials_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#oauth2_client_credentials_config GoogleApihubPluginInstance#oauth2_client_credentials_config}

---

##### `user_password_config`<sup>Optional</sup> <a name="user_password_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.userPasswordConfig"></a>

```python
user_password_config: GoogleApihubPluginInstanceAuthConfigUserPasswordConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

user_password_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#user_password_config GoogleApihubPluginInstance#user_password_config}

---

### GoogleApihubPluginInstanceAuthConfigApiKeyConfig <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig(
  api_key: GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey,
  http_element_location: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.apiKey">api_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | api_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.httpElementLocation">http_element_location</a></code> | <code>str</code> | The location of the API key. The default value is QUERY. Possible values: HTTP_ELEMENT_LOCATION_UNSPECIFIED QUERY HEADER PATH BODY COOKIE. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.name">name</a></code> | <code>str</code> | The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name. |

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.apiKey"></a>

```python
api_key: GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#api_key GoogleApihubPluginInstance#api_key}

---

##### `http_element_location`<sup>Required</sup> <a name="http_element_location" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.httpElementLocation"></a>

```python
http_element_location: str
```

- *Type:* str

The location of the API key. The default value is QUERY. Possible values: HTTP_ELEMENT_LOCATION_UNSPECIFIED QUERY HEADER PATH BODY COOKIE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#http_element_location GoogleApihubPluginInstance#http_element_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#name GoogleApihubPluginInstance#name}

---

### GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey(
  secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey.property.secretVersion">secret_version</a></code> | <code>str</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig <a name="GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig(
  service_account: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The service account to be used for authenticating request. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The service account to be used for authenticating request.

The 'iam.serviceAccounts.getAccessToken' permission should be granted on
this service account to the impersonator service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#service_account GoogleApihubPluginInstance#service_account}

---

### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig(
  client_id: str,
  client_secret: GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientId">client_id</a></code> | <code>str</code> | The client identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientSecret">client_secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | client_secret block. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#client_id GoogleApihubPluginInstance#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientSecret"></a>

```python
client_secret: GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#client_secret GoogleApihubPluginInstance#client_secret}

---

### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret(
  secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.property.secretVersion">secret_version</a></code> | <code>str</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleApihubPluginInstanceAuthConfigUserPasswordConfig <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig(
  password: GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.password">password</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | password block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.username">username</a></code> | <code>str</code> | Username. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.password"></a>

```python
password: GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#password GoogleApihubPluginInstance#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#username GoogleApihubPluginInstance#username}

---

### GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword(
  secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword.property.secretVersion">secret_version</a></code> | <code>str</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleApihubPluginInstanceConfig <a name="GoogleApihubPluginInstanceConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  plugin: str,
  plugin_instance_id: str,
  actions: typing.Union[IResolvable, typing.List[GoogleApihubPluginInstanceActions]] = None,
  auth_config: GoogleApihubPluginInstanceAuthConfig = None,
  disable: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleApihubPluginInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.plugin">plugin</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.pluginInstanceId">plugin_instance_id</a></code> | <code>str</code> | The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>]]</code> | actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.disable">disable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#id GoogleApihubPluginInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#project GoogleApihubPluginInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#display_name GoogleApihubPluginInstance#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#location GoogleApihubPluginInstance#location}

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.plugin"></a>

```python
plugin: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#plugin GoogleApihubPluginInstance#plugin}

---

##### `plugin_instance_id`<sup>Required</sup> <a name="plugin_instance_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.pluginInstanceId"></a>

```python
plugin_instance_id: str
```

- *Type:* str

The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified id is already used by another plugin instance in the plugin
  resource.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, and valid characters
are /a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#plugin_instance_id GoogleApihubPluginInstance#plugin_instance_id}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.actions"></a>

```python
actions: typing.Union[IResolvable, typing.List[GoogleApihubPluginInstanceActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#actions GoogleApihubPluginInstance#actions}

---

##### `auth_config`<sup>Optional</sup> <a name="auth_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.authConfig"></a>

```python
auth_config: GoogleApihubPluginInstanceAuthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#auth_config GoogleApihubPluginInstance#auth_config}

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.disable"></a>

```python
disable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#disable GoogleApihubPluginInstance#disable}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#id GoogleApihubPluginInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#project GoogleApihubPluginInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleApihubPluginInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#timeouts GoogleApihubPluginInstance#timeouts}

---

### GoogleApihubPluginInstanceTimeouts <a name="GoogleApihubPluginInstanceTimeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#create GoogleApihubPluginInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#delete GoogleApihubPluginInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#update GoogleApihubPluginInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#create GoogleApihubPluginInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#delete GoogleApihubPluginInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#update GoogleApihubPluginInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference <a name="GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curationInput">curation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curation">curation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `curation_input`<sup>Optional</sup> <a name="curation_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curationInput"></a>

```python
curation_input: str
```

- *Type:* str

---

##### `curation`<sup>Required</sup> <a name="curation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curation"></a>

```python
curation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginInstanceActionsCurationConfigCustomCuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---


### GoogleApihubPluginInstanceActionsCurationConfigOutputReference <a name="GoogleApihubPluginInstanceActionsCurationConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration">put_custom_curation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCurationType">reset_curation_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCustomCuration">reset_custom_curation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_curation` <a name="put_custom_curation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration"></a>

```python
def put_custom_curation(
  curation: str
) -> None
```

###### `curation`<sup>Required</sup> <a name="curation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration.parameter.curation"></a>

- *Type:* str

The unique name of the curation resource. This will be the name of the curation resource in the format: 'projects/{project}/locations/{location}/curations/{curation}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#curation GoogleApihubPluginInstance#curation}

---

##### `reset_curation_type` <a name="reset_curation_type" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCurationType"></a>

```python
def reset_curation_type() -> None
```

##### `reset_custom_curation` <a name="reset_custom_curation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCustomCuration"></a>

```python
def reset_custom_curation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCuration">custom_curation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference">GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationTypeInput">curation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCurationInput">custom_curation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationType">curation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_curation`<sup>Required</sup> <a name="custom_curation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCuration"></a>

```python
custom_curation: GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference">GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference</a>

---

##### `curation_type_input`<sup>Optional</sup> <a name="curation_type_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationTypeInput"></a>

```python
curation_type_input: str
```

- *Type:* str

---

##### `custom_curation_input`<sup>Optional</sup> <a name="custom_curation_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCurationInput"></a>

```python
custom_curation_input: GoogleApihubPluginInstanceActionsCurationConfigCustomCuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---

##### `curation_type`<sup>Required</sup> <a name="curation_type" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationType"></a>

```python
curation_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginInstanceActionsCurationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

---


### GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList <a name="GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference <a name="GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution</a>

---


### GoogleApihubPluginInstanceActionsHubInstanceActionList <a name="GoogleApihubPluginInstanceActionsHubInstanceActionList" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference <a name="GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.currentExecutionState">current_execution_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.lastExecution">last_execution</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction">GoogleApihubPluginInstanceActionsHubInstanceAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_execution_state`<sup>Required</sup> <a name="current_execution_state" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.currentExecutionState"></a>

```python
current_execution_state: str
```

- *Type:* str

---

##### `last_execution`<sup>Required</sup> <a name="last_execution" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.lastExecution"></a>

```python
last_execution: GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginInstanceActionsHubInstanceAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction">GoogleApihubPluginInstanceActionsHubInstanceAction</a>

---


### GoogleApihubPluginInstanceActionsList <a name="GoogleApihubPluginInstanceActionsList" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApihubPluginInstanceActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApihubPluginInstanceActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>]]

---


### GoogleApihubPluginInstanceActionsOutputReference <a name="GoogleApihubPluginInstanceActionsOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.putCurationConfig">put_curation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetCurationConfig">reset_curation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleCronExpression">reset_schedule_cron_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleTimeZone">reset_schedule_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_curation_config` <a name="put_curation_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.putCurationConfig"></a>

```python
def put_curation_config(
  curation_type: str = None,
  custom_curation: GoogleApihubPluginInstanceActionsCurationConfigCustomCuration = None
) -> None
```

###### `curation_type`<sup>Optional</sup> <a name="curation_type" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.putCurationConfig.parameter.curationType"></a>

- *Type:* str

Possible values: CURATION_TYPE_UNSPECIFIED DEFAULT_CURATION_FOR_API_METADATA CUSTOM_CURATION_FOR_API_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#curation_type GoogleApihubPluginInstance#curation_type}

---

###### `custom_curation`<sup>Optional</sup> <a name="custom_curation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.putCurationConfig.parameter.customCuration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

custom_curation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#custom_curation GoogleApihubPluginInstance#custom_curation}

---

##### `reset_curation_config` <a name="reset_curation_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetCurationConfig"></a>

```python
def reset_curation_config() -> None
```

##### `reset_schedule_cron_expression` <a name="reset_schedule_cron_expression" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleCronExpression"></a>

```python
def reset_schedule_cron_expression() -> None
```

##### `reset_schedule_time_zone` <a name="reset_schedule_time_zone" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleTimeZone"></a>

```python
def reset_schedule_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfig">curation_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference">GoogleApihubPluginInstanceActionsCurationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.hubInstanceAction">hub_instance_action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList">GoogleApihubPluginInstanceActionsHubInstanceActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionIdInput">action_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfigInput">curation_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpressionInput">schedule_cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZoneInput">schedule_time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionId">action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpression">schedule_cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZone">schedule_time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `curation_config`<sup>Required</sup> <a name="curation_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfig"></a>

```python
curation_config: GoogleApihubPluginInstanceActionsCurationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference">GoogleApihubPluginInstanceActionsCurationConfigOutputReference</a>

---

##### `hub_instance_action`<sup>Required</sup> <a name="hub_instance_action" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.hubInstanceAction"></a>

```python
hub_instance_action: GoogleApihubPluginInstanceActionsHubInstanceActionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList">GoogleApihubPluginInstanceActionsHubInstanceActionList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `action_id_input`<sup>Optional</sup> <a name="action_id_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionIdInput"></a>

```python
action_id_input: str
```

- *Type:* str

---

##### `curation_config_input`<sup>Optional</sup> <a name="curation_config_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfigInput"></a>

```python
curation_config_input: GoogleApihubPluginInstanceActionsCurationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

---

##### `schedule_cron_expression_input`<sup>Optional</sup> <a name="schedule_cron_expression_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpressionInput"></a>

```python
schedule_cron_expression_input: str
```

- *Type:* str

---

##### `schedule_time_zone_input`<sup>Optional</sup> <a name="schedule_time_zone_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZoneInput"></a>

```python
schedule_time_zone_input: str
```

- *Type:* str

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

---

##### `schedule_cron_expression`<sup>Required</sup> <a name="schedule_cron_expression" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpression"></a>

```python
schedule_cron_expression: str
```

- *Type:* str

---

##### `schedule_time_zone`<sup>Required</sup> <a name="schedule_time_zone" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZone"></a>

```python
schedule_time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApihubPluginInstanceActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions">GoogleApihubPluginInstanceActions</a>]

---


### GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---


### GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey">put_api_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey"></a>

```python
def put_api_key(
  secret_version: str
) -> None
```

###### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey.parameter.secretVersion"></a>

- *Type:* str

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKeyInput">api_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocationInput">http_element_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocation">http_element_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKey"></a>

```python
api_key: GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKeyInput"></a>

```python
api_key_input: GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---

##### `http_element_location_input`<sup>Optional</sup> <a name="http_element_location_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocationInput"></a>

```python
http_element_location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `http_element_location`<sup>Required</sup> <a name="http_element_location" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocation"></a>

```python
http_element_location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginInstanceAuthConfigApiKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---


### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret">put_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_secret` <a name="put_client_secret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret"></a>

```python
def put_client_secret(
  secret_version: str
) -> None
```

###### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret.parameter.secretVersion"></a>

- *Type:* str

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecret">client_secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecret"></a>

```python
client_secret: GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig">put_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig">put_google_service_account_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig">put_oauth2_client_credentials_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig">put_user_password_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetApiKeyConfig">reset_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetGoogleServiceAccountConfig">reset_google_service_account_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetOauth2ClientCredentialsConfig">reset_oauth2_client_credentials_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetUserPasswordConfig">reset_user_password_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_config` <a name="put_api_key_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig"></a>

```python
def put_api_key_config(
  api_key: GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey,
  http_element_location: str,
  name: str
) -> None
```

###### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig.parameter.apiKey"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#api_key GoogleApihubPluginInstance#api_key}

---

###### `http_element_location`<sup>Required</sup> <a name="http_element_location" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig.parameter.httpElementLocation"></a>

- *Type:* str

The location of the API key. The default value is QUERY. Possible values: HTTP_ELEMENT_LOCATION_UNSPECIFIED QUERY HEADER PATH BODY COOKIE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#http_element_location GoogleApihubPluginInstance#http_element_location}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig.parameter.name"></a>

- *Type:* str

The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#name GoogleApihubPluginInstance#name}

---

##### `put_google_service_account_config` <a name="put_google_service_account_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig"></a>

```python
def put_google_service_account_config(
  service_account: str
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig.parameter.serviceAccount"></a>

- *Type:* str

The service account to be used for authenticating request.

The 'iam.serviceAccounts.getAccessToken' permission should be granted on
this service account to the impersonator service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#service_account GoogleApihubPluginInstance#service_account}

---

##### `put_oauth2_client_credentials_config` <a name="put_oauth2_client_credentials_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig"></a>

```python
def put_oauth2_client_credentials_config(
  client_id: str,
  client_secret: GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig.parameter.clientId"></a>

- *Type:* str

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#client_id GoogleApihubPluginInstance#client_id}

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig.parameter.clientSecret"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#client_secret GoogleApihubPluginInstance#client_secret}

---

##### `put_user_password_config` <a name="put_user_password_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig"></a>

```python
def put_user_password_config(
  password: GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig.parameter.password"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#password GoogleApihubPluginInstance#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig.parameter.username"></a>

- *Type:* str

Username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#username GoogleApihubPluginInstance#username}

---

##### `reset_api_key_config` <a name="reset_api_key_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetApiKeyConfig"></a>

```python
def reset_api_key_config() -> None
```

##### `reset_google_service_account_config` <a name="reset_google_service_account_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetGoogleServiceAccountConfig"></a>

```python
def reset_google_service_account_config() -> None
```

##### `reset_oauth2_client_credentials_config` <a name="reset_oauth2_client_credentials_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetOauth2ClientCredentialsConfig"></a>

```python
def reset_oauth2_client_credentials_config() -> None
```

##### `reset_user_password_config` <a name="reset_user_password_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetUserPasswordConfig"></a>

```python
def reset_user_password_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfig">google_service_account_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfig">oauth2_client_credentials_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfig">user_password_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfigInput">api_key_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfigInput">google_service_account_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfigInput">oauth2_client_credentials_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfigInput">user_password_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference</a>

---

##### `google_service_account_config`<sup>Required</sup> <a name="google_service_account_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfig"></a>

```python
google_service_account_config: GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference</a>

---

##### `oauth2_client_credentials_config`<sup>Required</sup> <a name="oauth2_client_credentials_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfig"></a>

```python
oauth2_client_credentials_config: GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference</a>

---

##### `user_password_config`<sup>Required</sup> <a name="user_password_config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfig"></a>

```python
user_password_config: GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference</a>

---

##### `api_key_config_input`<sup>Optional</sup> <a name="api_key_config_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfigInput"></a>

```python
api_key_config_input: GoogleApihubPluginInstanceAuthConfigApiKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `google_service_account_config_input`<sup>Optional</sup> <a name="google_service_account_config_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfigInput"></a>

```python
google_service_account_config_input: GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---

##### `oauth2_client_credentials_config_input`<sup>Optional</sup> <a name="oauth2_client_credentials_config_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfigInput"></a>

```python
oauth2_client_credentials_config_input: GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---

##### `user_password_config_input`<sup>Optional</sup> <a name="user_password_config_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfigInput"></a>

```python
user_password_config_input: GoogleApihubPluginInstanceAuthConfigUserPasswordConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginInstanceAuthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword">put_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_password` <a name="put_password" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword"></a>

```python
def put_password(
  secret_version: str
) -> None
```

###### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword.parameter.secretVersion"></a>

- *Type:* str

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.password">password</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.passwordInput">password_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.password"></a>

```python
password: GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.passwordInput"></a>

```python
password_input: GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginInstanceAuthConfigUserPasswordConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---


### GoogleApihubPluginInstanceTimeoutsOutputReference <a name="GoogleApihubPluginInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_plugin_instance

googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApihubPluginInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>]

---



