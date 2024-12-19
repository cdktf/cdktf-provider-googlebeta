# `googleSccFolderNotificationConfig` Submodule <a name="`googleSccFolderNotificationConfig` Submodule" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccFolderNotificationConfig <a name="GoogleSccFolderNotificationConfig" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config google_scc_folder_notification_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_notification_config

googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config_id: str,
  folder: str,
  pubsub_topic: str,
  streaming_config: GoogleSccFolderNotificationConfigStreamingConfig,
  description: str = None,
  id: str = None,
  timeouts: GoogleSccFolderNotificationConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.configId">config_id</a></code> | <code>str</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.folder">folder</a></code> | <code>str</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]". |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.streamingConfig">streaming_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a></code> | streaming_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#id GoogleSccFolderNotificationConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.configId"></a>

- *Type:* str

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#config_id GoogleSccFolderNotificationConfig#config_id}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.folder"></a>

- *Type:* str

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#folder GoogleSccFolderNotificationConfig#folder}

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.pubsubTopic"></a>

- *Type:* str

The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#pubsub_topic GoogleSccFolderNotificationConfig#pubsub_topic}

---

##### `streaming_config`<sup>Required</sup> <a name="streaming_config" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.streamingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a>

streaming_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#streaming_config GoogleSccFolderNotificationConfig#streaming_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.description"></a>

- *Type:* str

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#description GoogleSccFolderNotificationConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#id GoogleSccFolderNotificationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#timeouts GoogleSccFolderNotificationConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.putStreamingConfig">put_streaming_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_streaming_config` <a name="put_streaming_config" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.putStreamingConfig"></a>

```python
def put_streaming_config(
  filter: str
) -> None
```

###### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.putStreamingConfig.parameter.filter"></a>

- *Type:* str

Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#filter GoogleSccFolderNotificationConfig#filter}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#create GoogleSccFolderNotificationConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#delete GoogleSccFolderNotificationConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#update GoogleSccFolderNotificationConfig#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSccFolderNotificationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_notification_config

googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_notification_config

googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_notification_config

googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_notification_config

googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSccFolderNotificationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSccFolderNotificationConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSccFolderNotificationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccFolderNotificationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.streamingConfig">streaming_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference">GoogleSccFolderNotificationConfigStreamingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference">GoogleSccFolderNotificationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.configIdInput">config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.pubsubTopicInput">pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.streamingConfigInput">streaming_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `streaming_config`<sup>Required</sup> <a name="streaming_config" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.streamingConfig"></a>

```python
streaming_config: GoogleSccFolderNotificationConfigStreamingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference">GoogleSccFolderNotificationConfigStreamingConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.timeouts"></a>

```python
timeouts: GoogleSccFolderNotificationConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference">GoogleSccFolderNotificationConfigTimeoutsOutputReference</a>

---

##### `config_id_input`<sup>Optional</sup> <a name="config_id_input" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.configIdInput"></a>

```python
config_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `pubsub_topic_input`<sup>Optional</sup> <a name="pubsub_topic_input" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.pubsubTopicInput"></a>

```python
pubsub_topic_input: str
```

- *Type:* str

---

##### `streaming_config_input`<sup>Optional</sup> <a name="streaming_config_input" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.streamingConfigInput"></a>

```python
streaming_config_input: GoogleSccFolderNotificationConfigStreamingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSccFolderNotificationConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a>]

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccFolderNotificationConfigConfig <a name="GoogleSccFolderNotificationConfigConfig" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_notification_config

googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config_id: str,
  folder: str,
  pubsub_topic: str,
  streaming_config: GoogleSccFolderNotificationConfigStreamingConfig,
  description: str = None,
  id: str = None,
  timeouts: GoogleSccFolderNotificationConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.configId">config_id</a></code> | <code>str</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.folder">folder</a></code> | <code>str</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]". |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.streamingConfig">streaming_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a></code> | streaming_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.description">description</a></code> | <code>str</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#id GoogleSccFolderNotificationConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#config_id GoogleSccFolderNotificationConfig#config_id}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#folder GoogleSccFolderNotificationConfig#folder}

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#pubsub_topic GoogleSccFolderNotificationConfig#pubsub_topic}

---

##### `streaming_config`<sup>Required</sup> <a name="streaming_config" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.streamingConfig"></a>

```python
streaming_config: GoogleSccFolderNotificationConfigStreamingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a>

streaming_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#streaming_config GoogleSccFolderNotificationConfig#streaming_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#description GoogleSccFolderNotificationConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#id GoogleSccFolderNotificationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleSccFolderNotificationConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#timeouts GoogleSccFolderNotificationConfig#timeouts}

---

### GoogleSccFolderNotificationConfigStreamingConfig <a name="GoogleSccFolderNotificationConfigStreamingConfig" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_notification_config

googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig(
  filter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig.property.filter">filter</a></code> | <code>str</code> | Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#filter GoogleSccFolderNotificationConfig#filter}

---

### GoogleSccFolderNotificationConfigTimeouts <a name="GoogleSccFolderNotificationConfigTimeouts" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_notification_config

googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#create GoogleSccFolderNotificationConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#delete GoogleSccFolderNotificationConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#update GoogleSccFolderNotificationConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#create GoogleSccFolderNotificationConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#delete GoogleSccFolderNotificationConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_scc_folder_notification_config#update GoogleSccFolderNotificationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccFolderNotificationConfigStreamingConfigOutputReference <a name="GoogleSccFolderNotificationConfigStreamingConfigOutputReference" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_notification_config

googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccFolderNotificationConfigStreamingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a>

---


### GoogleSccFolderNotificationConfigTimeoutsOutputReference <a name="GoogleSccFolderNotificationConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_notification_config

googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSccFolderNotificationConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a>]

---



