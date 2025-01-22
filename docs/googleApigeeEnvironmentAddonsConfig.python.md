# `googleApigeeEnvironmentAddonsConfig` Submodule <a name="`googleApigeeEnvironmentAddonsConfig` Submodule" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironmentAddonsConfig <a name="GoogleApigeeEnvironmentAddonsConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config google_apigee_environment_addons_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_addons_config

googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  env_id: str,
  analytics_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: GoogleApigeeEnvironmentAddonsConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.envId">env_id</a></code> | <code>str</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.analyticsEnabled">analytics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to enable/disable Analytics. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#id GoogleApigeeEnvironmentAddonsConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts">GoogleApigeeEnvironmentAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.envId"></a>

- *Type:* str

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#env_id GoogleApigeeEnvironmentAddonsConfig#env_id}

---

##### `analytics_enabled`<sup>Optional</sup> <a name="analytics_enabled" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.analyticsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to enable/disable Analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#analytics_enabled GoogleApigeeEnvironmentAddonsConfig#analytics_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#id GoogleApigeeEnvironmentAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts">GoogleApigeeEnvironmentAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#timeouts GoogleApigeeEnvironmentAddonsConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetAnalyticsEnabled">reset_analytics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#create GoogleApigeeEnvironmentAddonsConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#delete GoogleApigeeEnvironmentAddonsConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#update GoogleApigeeEnvironmentAddonsConfig#update}.

---

##### `reset_analytics_enabled` <a name="reset_analytics_enabled" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetAnalyticsEnabled"></a>

```python
def reset_analytics_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleApigeeEnvironmentAddonsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_addons_config

googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_addons_config

googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_addons_config

googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_addons_config

googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleApigeeEnvironmentAddonsConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApigeeEnvironmentAddonsConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApigeeEnvironmentAddonsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironmentAddonsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference">GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.analyticsEnabledInput">analytics_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.envIdInput">env_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts">GoogleApigeeEnvironmentAddonsConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.analyticsEnabled">analytics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.envId">env_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.timeouts"></a>

```python
timeouts: GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference">GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference</a>

---

##### `analytics_enabled_input`<sup>Optional</sup> <a name="analytics_enabled_input" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.analyticsEnabledInput"></a>

```python
analytics_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `env_id_input`<sup>Optional</sup> <a name="env_id_input" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.envIdInput"></a>

```python
env_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleApigeeEnvironmentAddonsConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts">GoogleApigeeEnvironmentAddonsConfigTimeouts</a>]

---

##### `analytics_enabled`<sup>Required</sup> <a name="analytics_enabled" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.analyticsEnabled"></a>

```python
analytics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.envId"></a>

```python
env_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentAddonsConfigConfig <a name="GoogleApigeeEnvironmentAddonsConfigConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_addons_config

googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  env_id: str,
  analytics_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: GoogleApigeeEnvironmentAddonsConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.envId">env_id</a></code> | <code>str</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.analyticsEnabled">analytics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to enable/disable Analytics. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#id GoogleApigeeEnvironmentAddonsConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts">GoogleApigeeEnvironmentAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.envId"></a>

```python
env_id: str
```

- *Type:* str

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#env_id GoogleApigeeEnvironmentAddonsConfig#env_id}

---

##### `analytics_enabled`<sup>Optional</sup> <a name="analytics_enabled" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.analyticsEnabled"></a>

```python
analytics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to enable/disable Analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#analytics_enabled GoogleApigeeEnvironmentAddonsConfig#analytics_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#id GoogleApigeeEnvironmentAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleApigeeEnvironmentAddonsConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts">GoogleApigeeEnvironmentAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#timeouts GoogleApigeeEnvironmentAddonsConfig#timeouts}

---

### GoogleApigeeEnvironmentAddonsConfigTimeouts <a name="GoogleApigeeEnvironmentAddonsConfigTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_addons_config

googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#create GoogleApigeeEnvironmentAddonsConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#delete GoogleApigeeEnvironmentAddonsConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#update GoogleApigeeEnvironmentAddonsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#create GoogleApigeeEnvironmentAddonsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#delete GoogleApigeeEnvironmentAddonsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apigee_environment_addons_config#update GoogleApigeeEnvironmentAddonsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference <a name="GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_addons_config

googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts">GoogleApigeeEnvironmentAddonsConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeEnvironmentAddonsConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentAddonsConfig.GoogleApigeeEnvironmentAddonsConfigTimeouts">GoogleApigeeEnvironmentAddonsConfigTimeouts</a>]

---



