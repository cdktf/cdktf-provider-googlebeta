# `google_game_services_game_server_deployment_rollout`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_deployment_rollout`](https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout).

# `googleGameServicesGameServerDeploymentRollout` Submodule <a name="`googleGameServicesGameServerDeploymentRollout` Submodule" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGameServicesGameServerDeploymentRollout <a name="GoogleGameServicesGameServerDeploymentRollout" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout google_game_services_game_server_deployment_rollout}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_deployment_rollout

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_game_server_config: str,
  deployment_id: str,
  game_server_config_overrides: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides]] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleGameServicesGameServerDeploymentRolloutTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.defaultGameServerConfig">default_game_server_config</a></code> | <code>str</code> | This field points to the game server config that is applied by default to all realms and clusters. For example,. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.deploymentId">deployment_id</a></code> | <code>str</code> | The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.gameServerConfigOverrides">game_server_config_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]</code> | game_server_config_overrides block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#id GoogleGameServicesGameServerDeploymentRollout#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#project GoogleGameServicesGameServerDeploymentRollout#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_game_server_config`<sup>Required</sup> <a name="default_game_server_config" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.defaultGameServerConfig"></a>

- *Type:* str

This field points to the game server config that is applied by default to all realms and clusters. For example,.

'projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#default_game_server_config GoogleGameServicesGameServerDeploymentRollout#default_game_server_config}

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.deploymentId"></a>

- *Type:* str

The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#deployment_id GoogleGameServicesGameServerDeploymentRollout#deployment_id}

---

##### `game_server_config_overrides`<sup>Optional</sup> <a name="game_server_config_overrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.gameServerConfigOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]

game_server_config_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#game_server_config_overrides GoogleGameServicesGameServerDeploymentRollout#game_server_config_overrides}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#id GoogleGameServicesGameServerDeploymentRollout#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#project GoogleGameServicesGameServerDeploymentRollout#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#timeouts GoogleGameServicesGameServerDeploymentRollout#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putGameServerConfigOverrides">put_game_server_config_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetGameServerConfigOverrides">reset_game_server_config_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_game_server_config_overrides` <a name="put_game_server_config_overrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putGameServerConfigOverrides"></a>

```python
def put_game_server_config_overrides(
  value: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putGameServerConfigOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#create GoogleGameServicesGameServerDeploymentRollout#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#delete GoogleGameServicesGameServerDeploymentRollout#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#update GoogleGameServicesGameServerDeploymentRollout#update}.

---

##### `reset_game_server_config_overrides` <a name="reset_game_server_config_overrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetGameServerConfigOverrides"></a>

```python
def reset_game_server_config_overrides() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_deployment_rollout

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_deployment_rollout

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_deployment_rollout

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides">game_server_config_overrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference">GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfigInput">default_game_server_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverridesInput">game_server_config_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfig">default_game_server_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `game_server_config_overrides`<sup>Required</sup> <a name="game_server_config_overrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides"></a>

```python
game_server_config_overrides: GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.timeouts"></a>

```python
timeouts: GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference">GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference</a>

---

##### `default_game_server_config_input`<sup>Optional</sup> <a name="default_game_server_config_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfigInput"></a>

```python
default_game_server_config_input: str
```

- *Type:* str

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `game_server_config_overrides_input`<sup>Optional</sup> <a name="game_server_config_overrides_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverridesInput"></a>

```python
game_server_config_overrides_input: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GoogleGameServicesGameServerDeploymentRolloutTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a>, cdktf.IResolvable]

---

##### `default_game_server_config`<sup>Required</sup> <a name="default_game_server_config" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfig"></a>

```python
default_game_server_config: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGameServicesGameServerDeploymentRolloutConfig <a name="GoogleGameServicesGameServerDeploymentRolloutConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_deployment_rollout

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_game_server_config: str,
  deployment_id: str,
  game_server_config_overrides: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides]] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleGameServicesGameServerDeploymentRolloutTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.defaultGameServerConfig">default_game_server_config</a></code> | <code>str</code> | This field points to the game server config that is applied by default to all realms and clusters. For example,. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.deploymentId">deployment_id</a></code> | <code>str</code> | The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.gameServerConfigOverrides">game_server_config_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]</code> | game_server_config_overrides block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#id GoogleGameServicesGameServerDeploymentRollout#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#project GoogleGameServicesGameServerDeploymentRollout#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_game_server_config`<sup>Required</sup> <a name="default_game_server_config" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.defaultGameServerConfig"></a>

```python
default_game_server_config: str
```

- *Type:* str

This field points to the game server config that is applied by default to all realms and clusters. For example,.

'projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#default_game_server_config GoogleGameServicesGameServerDeploymentRollout#default_game_server_config}

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#deployment_id GoogleGameServicesGameServerDeploymentRollout#deployment_id}

---

##### `game_server_config_overrides`<sup>Optional</sup> <a name="game_server_config_overrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.gameServerConfigOverrides"></a>

```python
game_server_config_overrides: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]

game_server_config_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#game_server_config_overrides GoogleGameServicesGameServerDeploymentRollout#game_server_config_overrides}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#id GoogleGameServicesGameServerDeploymentRollout#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#project GoogleGameServicesGameServerDeploymentRollout#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.timeouts"></a>

```python
timeouts: GoogleGameServicesGameServerDeploymentRolloutTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#timeouts GoogleGameServicesGameServerDeploymentRollout#timeouts}

---

### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_deployment_rollout

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides(
  config_version: str = None,
  realms_selector: GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.configVersion">config_version</a></code> | <code>str</code> | Version of the configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.realmsSelector">realms_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | realms_selector block. |

---

##### `config_version`<sup>Optional</sup> <a name="config_version" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.configVersion"></a>

```python
config_version: str
```

- *Type:* str

Version of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#config_version GoogleGameServicesGameServerDeploymentRollout#config_version}

---

##### `realms_selector`<sup>Optional</sup> <a name="realms_selector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.realmsSelector"></a>

```python
realms_selector: GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

realms_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#realms_selector GoogleGameServicesGameServerDeploymentRollout#realms_selector}

---

### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_deployment_rollout

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector(
  realms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.property.realms">realms</a></code> | <code>typing.List[str]</code> | List of realms to match against. |

---

##### `realms`<sup>Optional</sup> <a name="realms" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.property.realms"></a>

```python
realms: typing.List[str]
```

- *Type:* typing.List[str]

List of realms to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#realms GoogleGameServicesGameServerDeploymentRollout#realms}

---

### GoogleGameServicesGameServerDeploymentRolloutTimeouts <a name="GoogleGameServicesGameServerDeploymentRolloutTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_deployment_rollout

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#create GoogleGameServicesGameServerDeploymentRollout#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#delete GoogleGameServicesGameServerDeploymentRollout#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#update GoogleGameServicesGameServerDeploymentRollout#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#create GoogleGameServicesGameServerDeploymentRollout#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#delete GoogleGameServicesGameServerDeploymentRollout#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#update GoogleGameServicesGameServerDeploymentRollout#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_deployment_rollout

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>]]

---


### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_deployment_rollout

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector">put_realms_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetConfigVersion">reset_config_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetRealmsSelector">reset_realms_selector</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_realms_selector` <a name="put_realms_selector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector"></a>

```python
def put_realms_selector(
  realms: typing.List[str] = None
) -> None
```

###### `realms`<sup>Optional</sup> <a name="realms" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector.parameter.realms"></a>

- *Type:* typing.List[str]

List of realms to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_game_services_game_server_deployment_rollout#realms GoogleGameServicesGameServerDeploymentRollout#realms}

---

##### `reset_config_version` <a name="reset_config_version" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetConfigVersion"></a>

```python
def reset_config_version() -> None
```

##### `reset_realms_selector` <a name="reset_realms_selector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetRealmsSelector"></a>

```python
def reset_realms_selector() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector">realms_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersionInput">config_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelectorInput">realms_selector_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion">config_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `realms_selector`<sup>Required</sup> <a name="realms_selector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector"></a>

```python
realms_selector: GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference</a>

---

##### `config_version_input`<sup>Optional</sup> <a name="config_version_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersionInput"></a>

```python
config_version_input: str
```

- *Type:* str

---

##### `realms_selector_input`<sup>Optional</sup> <a name="realms_selector_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelectorInput"></a>

```python
realms_selector_input: GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---

##### `config_version`<sup>Required</sup> <a name="config_version" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion"></a>

```python
config_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>, cdktf.IResolvable]

---


### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_deployment_rollout

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resetRealms">reset_realms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_realms` <a name="reset_realms" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resetRealms"></a>

```python
def reset_realms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realmsInput">realms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms">realms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `realms_input`<sup>Optional</sup> <a name="realms_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realmsInput"></a>

```python
realms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `realms`<sup>Required</sup> <a name="realms" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms"></a>

```python
realms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---


### GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference <a name="GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_game_services_game_server_deployment_rollout

googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleGameServicesGameServerDeploymentRolloutTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a>, cdktf.IResolvable]

---



