# `google_game_services_game_server_config`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_config`](https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config).

# `googleGameServicesGameServerConfig` Submodule <a name="`googleGameServicesGameServerConfig` Submodule" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGameServicesGameServerConfig <a name="GoogleGameServicesGameServerConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config google_game_services_game_server_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig(
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
  deployment_id: str,
  fleet_configs: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigFleetConfigs]],
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  scaling_configs: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigs]] = None,
  timeouts: GoogleGameServicesGameServerConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.configId">config_id</a></code> | <code>str</code> | A unique id for the deployment config. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.deploymentId">deployment_id</a></code> | <code>str</code> | A unique id for the deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.fleetConfigs">fleet_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs">GoogleGameServicesGameServerConfigFleetConfigs</a>]]</code> | fleet_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the game server config. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#id GoogleGameServicesGameServerConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this game server config. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the Deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#project GoogleGameServicesGameServerConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.scalingConfigs">scaling_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs">GoogleGameServicesGameServerConfigScalingConfigs</a>]]</code> | scaling_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts">GoogleGameServicesGameServerConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.configId"></a>

- *Type:* str

A unique id for the deployment config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#config_id GoogleGameServicesGameServerConfig#config_id}

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.deploymentId"></a>

- *Type:* str

A unique id for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#deployment_id GoogleGameServicesGameServerConfig#deployment_id}

---

##### `fleet_configs`<sup>Required</sup> <a name="fleet_configs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.fleetConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs">GoogleGameServicesGameServerConfigFleetConfigs</a>]]

fleet_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#fleet_configs GoogleGameServicesGameServerConfig#fleet_configs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.description"></a>

- *Type:* str

The description of the game server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#description GoogleGameServicesGameServerConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#id GoogleGameServicesGameServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels associated with this game server config. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#labels GoogleGameServicesGameServerConfig#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.location"></a>

- *Type:* str

Location of the Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#location GoogleGameServicesGameServerConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#project GoogleGameServicesGameServerConfig#project}.

---

##### `scaling_configs`<sup>Optional</sup> <a name="scaling_configs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.scalingConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs">GoogleGameServicesGameServerConfigScalingConfigs</a>]]

scaling_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#scaling_configs GoogleGameServicesGameServerConfig#scaling_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts">GoogleGameServicesGameServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#timeouts GoogleGameServicesGameServerConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putFleetConfigs">put_fleet_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putScalingConfigs">put_scaling_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetScalingConfigs">reset_scaling_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_fleet_configs` <a name="put_fleet_configs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putFleetConfigs"></a>

```python
def put_fleet_configs(
  value: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigFleetConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putFleetConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs">GoogleGameServicesGameServerConfigFleetConfigs</a>]]

---

##### `put_scaling_configs` <a name="put_scaling_configs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putScalingConfigs"></a>

```python
def put_scaling_configs(
  value: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putScalingConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs">GoogleGameServicesGameServerConfigScalingConfigs</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#create GoogleGameServicesGameServerConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#delete GoogleGameServicesGameServerConfig#delete}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_scaling_configs` <a name="reset_scaling_configs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetScalingConfigs"></a>

```python
def reset_scaling_configs() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fleetConfigs">fleet_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList">GoogleGameServicesGameServerConfigFleetConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.scalingConfigs">scaling_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList">GoogleGameServicesGameServerConfigScalingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference">GoogleGameServicesGameServerConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.configIdInput">config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fleetConfigsInput">fleet_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs">GoogleGameServicesGameServerConfigFleetConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.scalingConfigsInput">scaling_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs">GoogleGameServicesGameServerConfigScalingConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts">GoogleGameServicesGameServerConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_configs`<sup>Required</sup> <a name="fleet_configs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fleetConfigs"></a>

```python
fleet_configs: GoogleGameServicesGameServerConfigFleetConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList">GoogleGameServicesGameServerConfigFleetConfigsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scaling_configs`<sup>Required</sup> <a name="scaling_configs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.scalingConfigs"></a>

```python
scaling_configs: GoogleGameServicesGameServerConfigScalingConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList">GoogleGameServicesGameServerConfigScalingConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.timeouts"></a>

```python
timeouts: GoogleGameServicesGameServerConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference">GoogleGameServicesGameServerConfigTimeoutsOutputReference</a>

---

##### `config_id_input`<sup>Optional</sup> <a name="config_id_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.configIdInput"></a>

```python
config_id_input: str
```

- *Type:* str

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fleet_configs_input`<sup>Optional</sup> <a name="fleet_configs_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fleetConfigsInput"></a>

```python
fleet_configs_input: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigFleetConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs">GoogleGameServicesGameServerConfigFleetConfigs</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `scaling_configs_input`<sup>Optional</sup> <a name="scaling_configs_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.scalingConfigsInput"></a>

```python
scaling_configs_input: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs">GoogleGameServicesGameServerConfigScalingConfigs</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleGameServicesGameServerConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts">GoogleGameServicesGameServerConfigTimeouts</a>]

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGameServicesGameServerConfigConfig <a name="GoogleGameServicesGameServerConfigConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config_id: str,
  deployment_id: str,
  fleet_configs: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigFleetConfigs]],
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  scaling_configs: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigs]] = None,
  timeouts: GoogleGameServicesGameServerConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.configId">config_id</a></code> | <code>str</code> | A unique id for the deployment config. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.deploymentId">deployment_id</a></code> | <code>str</code> | A unique id for the deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.fleetConfigs">fleet_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs">GoogleGameServicesGameServerConfigFleetConfigs</a>]]</code> | fleet_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.description">description</a></code> | <code>str</code> | The description of the game server config. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#id GoogleGameServicesGameServerConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this game server config. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.location">location</a></code> | <code>str</code> | Location of the Deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#project GoogleGameServicesGameServerConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.scalingConfigs">scaling_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs">GoogleGameServicesGameServerConfigScalingConfigs</a>]]</code> | scaling_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts">GoogleGameServicesGameServerConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

A unique id for the deployment config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#config_id GoogleGameServicesGameServerConfig#config_id}

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

A unique id for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#deployment_id GoogleGameServicesGameServerConfig#deployment_id}

---

##### `fleet_configs`<sup>Required</sup> <a name="fleet_configs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.fleetConfigs"></a>

```python
fleet_configs: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigFleetConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs">GoogleGameServicesGameServerConfigFleetConfigs</a>]]

fleet_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#fleet_configs GoogleGameServicesGameServerConfig#fleet_configs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the game server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#description GoogleGameServicesGameServerConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#id GoogleGameServicesGameServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels associated with this game server config. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#labels GoogleGameServicesGameServerConfig#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#location GoogleGameServicesGameServerConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#project GoogleGameServicesGameServerConfig#project}.

---

##### `scaling_configs`<sup>Optional</sup> <a name="scaling_configs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.scalingConfigs"></a>

```python
scaling_configs: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs">GoogleGameServicesGameServerConfigScalingConfigs</a>]]

scaling_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#scaling_configs GoogleGameServicesGameServerConfig#scaling_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleGameServicesGameServerConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts">GoogleGameServicesGameServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#timeouts GoogleGameServicesGameServerConfig#timeouts}

---

### GoogleGameServicesGameServerConfigFleetConfigs <a name="GoogleGameServicesGameServerConfigFleetConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs(
  fleet_spec: str,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.property.fleetSpec">fleet_spec</a></code> | <code>str</code> | The fleet spec, which is sent to Agones to configure fleet. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.property.name">name</a></code> | <code>str</code> | The name of the FleetConfig. |

---

##### `fleet_spec`<sup>Required</sup> <a name="fleet_spec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.property.fleetSpec"></a>

```python
fleet_spec: str
```

- *Type:* str

The fleet spec, which is sent to Agones to configure fleet.

The spec can be passed as inline json but it is recommended to use a file reference
instead. File references can contain the json or yaml format of the fleet spec. Eg:

fleet_spec = jsonencode(yamldecode(file("fleet_configs.yaml")))
fleet_spec = file("fleet_configs.json")

The format of the spec can be found :
'https://agones.dev/site/docs/reference/fleet/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#fleet_spec GoogleGameServicesGameServerConfig#fleet_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the FleetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#name GoogleGameServicesGameServerConfig#name}

---

### GoogleGameServicesGameServerConfigScalingConfigs <a name="GoogleGameServicesGameServerConfigScalingConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs(
  fleet_autoscaler_spec: str,
  name: str,
  schedules: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigsSchedules]] = None,
  selectors: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigsSelectors]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.fleetAutoscalerSpec">fleet_autoscaler_spec</a></code> | <code>str</code> | Fleet autoscaler spec, which is sent to Agones. Example spec can be found : https://agones.dev/site/docs/reference/fleetautoscaler/. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.name">name</a></code> | <code>str</code> | The name of the ScalingConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.schedules">schedules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules">GoogleGameServicesGameServerConfigScalingConfigsSchedules</a>]]</code> | schedules block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.selectors">selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors">GoogleGameServicesGameServerConfigScalingConfigsSelectors</a>]]</code> | selectors block. |

---

##### `fleet_autoscaler_spec`<sup>Required</sup> <a name="fleet_autoscaler_spec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.fleetAutoscalerSpec"></a>

```python
fleet_autoscaler_spec: str
```

- *Type:* str

Fleet autoscaler spec, which is sent to Agones. Example spec can be found : https://agones.dev/site/docs/reference/fleetautoscaler/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#fleet_autoscaler_spec GoogleGameServicesGameServerConfig#fleet_autoscaler_spec}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the ScalingConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#name GoogleGameServicesGameServerConfig#name}

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.schedules"></a>

```python
schedules: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigsSchedules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules">GoogleGameServicesGameServerConfigScalingConfigsSchedules</a>]]

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#schedules GoogleGameServicesGameServerConfig#schedules}

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.selectors"></a>

```python
selectors: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigsSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors">GoogleGameServicesGameServerConfigScalingConfigsSelectors</a>]]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#selectors GoogleGameServicesGameServerConfig#selectors}

---

### GoogleGameServicesGameServerConfigScalingConfigsSchedules <a name="GoogleGameServicesGameServerConfigScalingConfigsSchedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules(
  cron_job_duration: str = None,
  cron_spec: str = None,
  end_time: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.cronJobDuration">cron_job_duration</a></code> | <code>str</code> | The duration for the cron job event. The duration of the event is effective after the cron job's start time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.cronSpec">cron_spec</a></code> | <code>str</code> | The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the realm. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.endTime">end_time</a></code> | <code>str</code> | The end time of the event. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.startTime">start_time</a></code> | <code>str</code> | The start time of the event. |

---

##### `cron_job_duration`<sup>Optional</sup> <a name="cron_job_duration" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.cronJobDuration"></a>

```python
cron_job_duration: str
```

- *Type:* str

The duration for the cron job event. The duration of the event is effective after the cron job's start time.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#cron_job_duration GoogleGameServicesGameServerConfig#cron_job_duration}

---

##### `cron_spec`<sup>Optional</sup> <a name="cron_spec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.cronSpec"></a>

```python
cron_spec: str
```

- *Type:* str

The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#cron_spec GoogleGameServicesGameServerConfig#cron_spec}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The end time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#end_time GoogleGameServicesGameServerConfig#end_time}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The start time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#start_time GoogleGameServicesGameServerConfig#start_time}

---

### GoogleGameServicesGameServerConfigScalingConfigsSelectors <a name="GoogleGameServicesGameServerConfigScalingConfigsSelectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors(
  labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels to group by. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of labels to group by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#labels GoogleGameServicesGameServerConfig#labels}

---

### GoogleGameServicesGameServerConfigTimeouts <a name="GoogleGameServicesGameServerConfigTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#create GoogleGameServicesGameServerConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#delete GoogleGameServicesGameServerConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#create GoogleGameServicesGameServerConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_game_services_game_server_config#delete GoogleGameServicesGameServerConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGameServicesGameServerConfigFleetConfigsList <a name="GoogleGameServicesGameServerConfigFleetConfigsList" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGameServicesGameServerConfigFleetConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs">GoogleGameServicesGameServerConfigFleetConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigFleetConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs">GoogleGameServicesGameServerConfigFleetConfigs</a>]]

---


### GoogleGameServicesGameServerConfigFleetConfigsOutputReference <a name="GoogleGameServicesGameServerConfigFleetConfigsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpecInput">fleet_spec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpec">fleet_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs">GoogleGameServicesGameServerConfigFleetConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fleet_spec_input`<sup>Optional</sup> <a name="fleet_spec_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpecInput"></a>

```python
fleet_spec_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `fleet_spec`<sup>Required</sup> <a name="fleet_spec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpec"></a>

```python
fleet_spec: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGameServicesGameServerConfigFleetConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs">GoogleGameServicesGameServerConfigFleetConfigs</a>]

---


### GoogleGameServicesGameServerConfigScalingConfigsList <a name="GoogleGameServicesGameServerConfigScalingConfigsList" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGameServicesGameServerConfigScalingConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs">GoogleGameServicesGameServerConfigScalingConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs">GoogleGameServicesGameServerConfigScalingConfigs</a>]]

---


### GoogleGameServicesGameServerConfigScalingConfigsOutputReference <a name="GoogleGameServicesGameServerConfigScalingConfigsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSchedules">put_schedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSelectors">put_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resetSchedules">reset_schedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resetSelectors">reset_selectors</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedules` <a name="put_schedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSchedules"></a>

```python
def put_schedules(
  value: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigsSchedules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSchedules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules">GoogleGameServicesGameServerConfigScalingConfigsSchedules</a>]]

---

##### `put_selectors` <a name="put_selectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSelectors"></a>

```python
def put_selectors(
  value: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigsSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors">GoogleGameServicesGameServerConfigScalingConfigsSelectors</a>]]

---

##### `reset_schedules` <a name="reset_schedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resetSchedules"></a>

```python
def reset_schedules() -> None
```

##### `reset_selectors` <a name="reset_selectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resetSelectors"></a>

```python
def reset_selectors() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.schedules">schedules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList">GoogleGameServicesGameServerConfigScalingConfigsSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList">GoogleGameServicesGameServerConfigScalingConfigsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpecInput">fleet_autoscaler_spec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.schedulesInput">schedules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules">GoogleGameServicesGameServerConfigScalingConfigsSchedules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.selectorsInput">selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors">GoogleGameServicesGameServerConfigScalingConfigsSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpec">fleet_autoscaler_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs">GoogleGameServicesGameServerConfigScalingConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.schedules"></a>

```python
schedules: GoogleGameServicesGameServerConfigScalingConfigsSchedulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList">GoogleGameServicesGameServerConfigScalingConfigsSchedulesList</a>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.selectors"></a>

```python
selectors: GoogleGameServicesGameServerConfigScalingConfigsSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList">GoogleGameServicesGameServerConfigScalingConfigsSelectorsList</a>

---

##### `fleet_autoscaler_spec_input`<sup>Optional</sup> <a name="fleet_autoscaler_spec_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpecInput"></a>

```python
fleet_autoscaler_spec_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schedules_input`<sup>Optional</sup> <a name="schedules_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.schedulesInput"></a>

```python
schedules_input: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigsSchedules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules">GoogleGameServicesGameServerConfigScalingConfigsSchedules</a>]]

---

##### `selectors_input`<sup>Optional</sup> <a name="selectors_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.selectorsInput"></a>

```python
selectors_input: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigsSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors">GoogleGameServicesGameServerConfigScalingConfigsSelectors</a>]]

---

##### `fleet_autoscaler_spec`<sup>Required</sup> <a name="fleet_autoscaler_spec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpec"></a>

```python
fleet_autoscaler_spec: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGameServicesGameServerConfigScalingConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs">GoogleGameServicesGameServerConfigScalingConfigs</a>]

---


### GoogleGameServicesGameServerConfigScalingConfigsSchedulesList <a name="GoogleGameServicesGameServerConfigScalingConfigsSchedulesList" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules">GoogleGameServicesGameServerConfigScalingConfigsSchedules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigsSchedules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules">GoogleGameServicesGameServerConfigScalingConfigsSchedules</a>]]

---


### GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference <a name="GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronJobDuration">reset_cron_job_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronSpec">reset_cron_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cron_job_duration` <a name="reset_cron_job_duration" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronJobDuration"></a>

```python
def reset_cron_job_duration() -> None
```

##### `reset_cron_spec` <a name="reset_cron_spec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronSpec"></a>

```python
def reset_cron_spec() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDurationInput">cron_job_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpecInput">cron_spec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDuration">cron_job_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpec">cron_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules">GoogleGameServicesGameServerConfigScalingConfigsSchedules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_job_duration_input`<sup>Optional</sup> <a name="cron_job_duration_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDurationInput"></a>

```python
cron_job_duration_input: str
```

- *Type:* str

---

##### `cron_spec_input`<sup>Optional</sup> <a name="cron_spec_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpecInput"></a>

```python
cron_spec_input: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `cron_job_duration`<sup>Required</sup> <a name="cron_job_duration" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDuration"></a>

```python
cron_job_duration: str
```

- *Type:* str

---

##### `cron_spec`<sup>Required</sup> <a name="cron_spec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpec"></a>

```python
cron_spec: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGameServicesGameServerConfigScalingConfigsSchedules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules">GoogleGameServicesGameServerConfigScalingConfigsSchedules</a>]

---


### GoogleGameServicesGameServerConfigScalingConfigsSelectorsList <a name="GoogleGameServicesGameServerConfigScalingConfigsSelectorsList" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors">GoogleGameServicesGameServerConfigScalingConfigsSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerConfigScalingConfigsSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors">GoogleGameServicesGameServerConfigScalingConfigsSelectors</a>]]

---


### GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference <a name="GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors">GoogleGameServicesGameServerConfigScalingConfigsSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGameServicesGameServerConfigScalingConfigsSelectors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors">GoogleGameServicesGameServerConfigScalingConfigsSelectors</a>]

---


### GoogleGameServicesGameServerConfigTimeoutsOutputReference <a name="GoogleGameServicesGameServerConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_config

googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts">GoogleGameServicesGameServerConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGameServicesGameServerConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts">GoogleGameServicesGameServerConfigTimeouts</a>]

---



