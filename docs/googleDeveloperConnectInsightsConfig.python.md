# `googleDeveloperConnectInsightsConfig` Submodule <a name="`googleDeveloperConnectInsightsConfig` Submodule" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeveloperConnectInsightsConfig <a name="GoogleDeveloperConnectInsightsConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config google_developer_connect_insights_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_hub_application: str,
  insights_config_id: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  artifact_configs: IResolvable | typing.List[GoogleDeveloperConnectInsightsConfigArtifactConfigs] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDeveloperConnectInsightsConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.appHubApplication">app_hub_application</a></code> | <code>str</code> | The name of the App Hub Application. Format: projects/{project}/locations/{location}/applications/{application}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.insightsConfigId">insights_config_id</a></code> | <code>str</code> | ID of the requesting InsightsConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.artifactConfigs">artifact_configs</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>]</code> | artifact_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#id GoogleDeveloperConnectInsightsConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with an InsightsConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#project GoogleDeveloperConnectInsightsConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `app_hub_application`<sup>Required</sup> <a name="app_hub_application" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.appHubApplication"></a>

- *Type:* str

The name of the App Hub Application. Format: projects/{project}/locations/{location}/applications/{application}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#app_hub_application GoogleDeveloperConnectInsightsConfig#app_hub_application}

---

##### `insights_config_id`<sup>Required</sup> <a name="insights_config_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.insightsConfigId"></a>

- *Type:* str

ID of the requesting InsightsConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#insights_config_id GoogleDeveloperConnectInsightsConfig#insights_config_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#location GoogleDeveloperConnectInsightsConfig#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#annotations GoogleDeveloperConnectInsightsConfig#annotations}

---

##### `artifact_configs`<sup>Optional</sup> <a name="artifact_configs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.artifactConfigs"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>]

artifact_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#artifact_configs GoogleDeveloperConnectInsightsConfig#artifact_configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#id GoogleDeveloperConnectInsightsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of labels associated with an InsightsConfig.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#labels GoogleDeveloperConnectInsightsConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#project GoogleDeveloperConnectInsightsConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#timeouts GoogleDeveloperConnectInsightsConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putArtifactConfigs">put_artifact_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetArtifactConfigs">reset_artifact_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_artifact_configs` <a name="put_artifact_configs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putArtifactConfigs"></a>

```python
def put_artifact_configs(
  value: IResolvable | typing.List[GoogleDeveloperConnectInsightsConfigArtifactConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putArtifactConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#create GoogleDeveloperConnectInsightsConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#delete GoogleDeveloperConnectInsightsConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#update GoogleDeveloperConnectInsightsConfig#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_artifact_configs` <a name="reset_artifact_configs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetArtifactConfigs"></a>

```python
def reset_artifact_configs() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDeveloperConnectInsightsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDeveloperConnectInsightsConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDeveloperConnectInsightsConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDeveloperConnectInsightsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDeveloperConnectInsightsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.artifactConfigs">artifact_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList">GoogleDeveloperConnectInsightsConfigArtifactConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList">GoogleDeveloperConnectInsightsConfigErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.runtimeConfigs">runtime_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference">GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.appHubApplicationInput">app_hub_application_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.artifactConfigsInput">artifact_configs_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.insightsConfigIdInput">insights_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.appHubApplication">app_hub_application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.insightsConfigId">insights_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `artifact_configs`<sup>Required</sup> <a name="artifact_configs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.artifactConfigs"></a>

```python
artifact_configs: GoogleDeveloperConnectInsightsConfigArtifactConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList">GoogleDeveloperConnectInsightsConfigArtifactConfigsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.errors"></a>

```python
errors: GoogleDeveloperConnectInsightsConfigErrorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList">GoogleDeveloperConnectInsightsConfigErrorsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `runtime_configs`<sup>Required</sup> <a name="runtime_configs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.runtimeConfigs"></a>

```python
runtime_configs: GoogleDeveloperConnectInsightsConfigRuntimeConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.timeouts"></a>

```python
timeouts: GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference">GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `app_hub_application_input`<sup>Optional</sup> <a name="app_hub_application_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.appHubApplicationInput"></a>

```python
app_hub_application_input: str
```

- *Type:* str

---

##### `artifact_configs_input`<sup>Optional</sup> <a name="artifact_configs_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.artifactConfigsInput"></a>

```python
artifact_configs_input: IResolvable | typing.List[GoogleDeveloperConnectInsightsConfigArtifactConfigs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `insights_config_id_input`<sup>Optional</sup> <a name="insights_config_id_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.insightsConfigIdInput"></a>

```python
insights_config_id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDeveloperConnectInsightsConfigTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `app_hub_application`<sup>Required</sup> <a name="app_hub_application" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.appHubApplication"></a>

```python
app_hub_application: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `insights_config_id`<sup>Required</sup> <a name="insights_config_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.insightsConfigId"></a>

```python
insights_config_id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeveloperConnectInsightsConfigArtifactConfigs <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs(
  google_artifact_analysis: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis = None,
  google_artifact_registry: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactAnalysis">google_artifact_analysis</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a></code> | google_artifact_analysis block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactRegistry">google_artifact_registry</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a></code> | google_artifact_registry block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.uri">uri</a></code> | <code>str</code> | The URI of the artifact that is deployed. |

---

##### `google_artifact_analysis`<sup>Optional</sup> <a name="google_artifact_analysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactAnalysis"></a>

```python
google_artifact_analysis: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

google_artifact_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#google_artifact_analysis GoogleDeveloperConnectInsightsConfig#google_artifact_analysis}

---

##### `google_artifact_registry`<sup>Optional</sup> <a name="google_artifact_registry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.googleArtifactRegistry"></a>

```python
google_artifact_registry: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

google_artifact_registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#google_artifact_registry GoogleDeveloperConnectInsightsConfig#google_artifact_registry}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI of the artifact that is deployed.

e.g. 'us-docker.pkg.dev/my-project/my-repo/image'.
The URI does not include the tag / digest because it captures a lineage of
artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#uri GoogleDeveloperConnectInsightsConfig#uri}

---

### GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis(
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis.property.projectId">project_id</a></code> | <code>str</code> | The project id of the project where the provenance is stored. |

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The project id of the project where the provenance is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#project_id GoogleDeveloperConnectInsightsConfig#project_id}

---

### GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry(
  artifact_registry_package: str,
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.artifactRegistryPackage">artifact_registry_package</a></code> | <code>str</code> | The name of the artifact registry package. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.projectId">project_id</a></code> | <code>str</code> | The host project of Artifact Registry. |

---

##### `artifact_registry_package`<sup>Required</sup> <a name="artifact_registry_package" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.artifactRegistryPackage"></a>

```python
artifact_registry_package: str
```

- *Type:* str

The name of the artifact registry package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#artifact_registry_package GoogleDeveloperConnectInsightsConfig#artifact_registry_package}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The host project of Artifact Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#project_id GoogleDeveloperConnectInsightsConfig#project_id}

---

### GoogleDeveloperConnectInsightsConfigConfig <a name="GoogleDeveloperConnectInsightsConfigConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_hub_application: str,
  insights_config_id: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  artifact_configs: IResolvable | typing.List[GoogleDeveloperConnectInsightsConfigArtifactConfigs] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDeveloperConnectInsightsConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.appHubApplication">app_hub_application</a></code> | <code>str</code> | The name of the App Hub Application. Format: projects/{project}/locations/{location}/applications/{application}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.insightsConfigId">insights_config_id</a></code> | <code>str</code> | ID of the requesting InsightsConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.artifactConfigs">artifact_configs</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>]</code> | artifact_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#id GoogleDeveloperConnectInsightsConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with an InsightsConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#project GoogleDeveloperConnectInsightsConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `app_hub_application`<sup>Required</sup> <a name="app_hub_application" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.appHubApplication"></a>

```python
app_hub_application: str
```

- *Type:* str

The name of the App Hub Application. Format: projects/{project}/locations/{location}/applications/{application}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#app_hub_application GoogleDeveloperConnectInsightsConfig#app_hub_application}

---

##### `insights_config_id`<sup>Required</sup> <a name="insights_config_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.insightsConfigId"></a>

```python
insights_config_id: str
```

- *Type:* str

ID of the requesting InsightsConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#insights_config_id GoogleDeveloperConnectInsightsConfig#insights_config_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#location GoogleDeveloperConnectInsightsConfig#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#annotations GoogleDeveloperConnectInsightsConfig#annotations}

---

##### `artifact_configs`<sup>Optional</sup> <a name="artifact_configs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.artifactConfigs"></a>

```python
artifact_configs: IResolvable | typing.List[GoogleDeveloperConnectInsightsConfigArtifactConfigs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>]

artifact_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#artifact_configs GoogleDeveloperConnectInsightsConfig#artifact_configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#id GoogleDeveloperConnectInsightsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of labels associated with an InsightsConfig.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#labels GoogleDeveloperConnectInsightsConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#project GoogleDeveloperConnectInsightsConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleDeveloperConnectInsightsConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#timeouts GoogleDeveloperConnectInsightsConfig#timeouts}

---

### GoogleDeveloperConnectInsightsConfigErrors <a name="GoogleDeveloperConnectInsightsConfigErrors" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrors.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrors()
```


### GoogleDeveloperConnectInsightsConfigErrorsDetails <a name="GoogleDeveloperConnectInsightsConfigErrorsDetails" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetails()
```


### GoogleDeveloperConnectInsightsConfigRuntimeConfigs <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigs" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigs()
```


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload()
```


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload()
```


### GoogleDeveloperConnectInsightsConfigTimeouts <a name="GoogleDeveloperConnectInsightsConfigTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#create GoogleDeveloperConnectInsightsConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#delete GoogleDeveloperConnectInsightsConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#update GoogleDeveloperConnectInsightsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#create GoogleDeveloperConnectInsightsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#delete GoogleDeveloperConnectInsightsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#update GoogleDeveloperConnectInsightsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

---


### GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackageInput">artifact_registry_package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackage">artifact_registry_package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_registry_package_input`<sup>Optional</sup> <a name="artifact_registry_package_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackageInput"></a>

```python
artifact_registry_package_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `artifact_registry_package`<sup>Required</sup> <a name="artifact_registry_package" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.artifactRegistryPackage"></a>

```python
artifact_registry_package: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

---


### GoogleDeveloperConnectInsightsConfigArtifactConfigsList <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDeveloperConnectInsightsConfigArtifactConfigs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>]

---


### GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference <a name="GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactAnalysis">put_google_artifact_analysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactRegistry">put_google_artifact_registry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactAnalysis">reset_google_artifact_analysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactRegistry">reset_google_artifact_registry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_google_artifact_analysis` <a name="put_google_artifact_analysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactAnalysis"></a>

```python
def put_google_artifact_analysis(
  project_id: str
) -> None
```

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactAnalysis.parameter.projectId"></a>

- *Type:* str

The project id of the project where the provenance is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#project_id GoogleDeveloperConnectInsightsConfig#project_id}

---

##### `put_google_artifact_registry` <a name="put_google_artifact_registry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactRegistry"></a>

```python
def put_google_artifact_registry(
  artifact_registry_package: str,
  project_id: str
) -> None
```

###### `artifact_registry_package`<sup>Required</sup> <a name="artifact_registry_package" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactRegistry.parameter.artifactRegistryPackage"></a>

- *Type:* str

The name of the artifact registry package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#artifact_registry_package GoogleDeveloperConnectInsightsConfig#artifact_registry_package}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.putGoogleArtifactRegistry.parameter.projectId"></a>

- *Type:* str

The host project of Artifact Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_developer_connect_insights_config#project_id GoogleDeveloperConnectInsightsConfig#project_id}

---

##### `reset_google_artifact_analysis` <a name="reset_google_artifact_analysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactAnalysis"></a>

```python
def reset_google_artifact_analysis() -> None
```

##### `reset_google_artifact_registry` <a name="reset_google_artifact_registry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetGoogleArtifactRegistry"></a>

```python
def reset_google_artifact_registry() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysis">google_artifact_analysis</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistry">google_artifact_registry</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysisInput">google_artifact_analysis_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistryInput">google_artifact_registry_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `google_artifact_analysis`<sup>Required</sup> <a name="google_artifact_analysis" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysis"></a>

```python
google_artifact_analysis: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference</a>

---

##### `google_artifact_registry`<sup>Required</sup> <a name="google_artifact_registry" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistry"></a>

```python
google_artifact_registry: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference</a>

---

##### `google_artifact_analysis_input`<sup>Optional</sup> <a name="google_artifact_analysis_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactAnalysisInput"></a>

```python
google_artifact_analysis_input: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis</a>

---

##### `google_artifact_registry_input`<sup>Optional</sup> <a name="google_artifact_registry_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.googleArtifactRegistryInput"></a>

```python
google_artifact_registry_input: GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry">GoogleDeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry</a>

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDeveloperConnectInsightsConfigArtifactConfigs
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigArtifactConfigs">GoogleDeveloperConnectInsightsConfigArtifactConfigs</a>

---


### GoogleDeveloperConnectInsightsConfigErrorsDetailsList <a name="GoogleDeveloperConnectInsightsConfigErrorsDetailsList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference <a name="GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.detailMessage">detail_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetails">GoogleDeveloperConnectInsightsConfigErrorsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detail_message`<sup>Required</sup> <a name="detail_message" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.detailMessage"></a>

```python
detail_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDeveloperConnectInsightsConfigErrorsDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetails">GoogleDeveloperConnectInsightsConfigErrorsDetails</a>

---


### GoogleDeveloperConnectInsightsConfigErrorsList <a name="GoogleDeveloperConnectInsightsConfigErrorsList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDeveloperConnectInsightsConfigErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDeveloperConnectInsightsConfigErrorsOutputReference <a name="GoogleDeveloperConnectInsightsConfigErrorsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.details">details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList">GoogleDeveloperConnectInsightsConfigErrorsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrors">GoogleDeveloperConnectInsightsConfigErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.details"></a>

```python
details: GoogleDeveloperConnectInsightsConfigErrorsDetailsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsDetailsList">GoogleDeveloperConnectInsightsConfigErrorsDetailsList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDeveloperConnectInsightsConfigErrors
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigErrors">GoogleDeveloperConnectInsightsConfigErrors</a>

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.criticality">criticality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.workload">workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload">GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.criticality"></a>

```python
criticality: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `workload`<sup>Required</sup> <a name="workload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.workload"></a>

```python
workload: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload">GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload</a>

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.deployment">deployment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload">GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.deployment"></a>

```python
deployment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload">GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload</a>

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsList <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsList" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference <a name="GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.appHubWorkload">app_hub_workload</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.gkeWorkload">gke_workload</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigs">GoogleDeveloperConnectInsightsConfigRuntimeConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_hub_workload`<sup>Required</sup> <a name="app_hub_workload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.appHubWorkload"></a>

```python
app_hub_workload: GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList</a>

---

##### `gke_workload`<sup>Required</sup> <a name="gke_workload" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.gkeWorkload"></a>

```python
gke_workload: GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList">GoogleDeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDeveloperConnectInsightsConfigRuntimeConfigs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigRuntimeConfigs">GoogleDeveloperConnectInsightsConfigRuntimeConfigs</a>

---


### GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference <a name="GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_insights_config

googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDeveloperConnectInsightsConfigTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDeveloperConnectInsightsConfig.GoogleDeveloperConnectInsightsConfigTimeouts">GoogleDeveloperConnectInsightsConfigTimeouts</a>

---



