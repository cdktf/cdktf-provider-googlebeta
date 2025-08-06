# `googleDiscoveryEngineCmekConfig` Submodule <a name="`googleDiscoveryEngineCmekConfig` Submodule" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineCmekConfig <a name="GoogleDiscoveryEngineCmekConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config google_discovery_engine_cmek_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_cmek_config

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kms_key: str,
  location: str,
  cmek_config_id: str = None,
  id: str = None,
  project: str = None,
  set_default: typing.Union[bool, IResolvable] = None,
  single_region_keys: typing.Union[IResolvable, typing.List[GoogleDiscoveryEngineCmekConfigSingleRegionKeys]] = None,
  timeouts: GoogleDiscoveryEngineCmekConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | KMS key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the CMEK config should reside. The value can only be one of "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.cmekConfigId">cmek_config_id</a></code> | <code>str</code> | The unique id of the cmek config. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#id GoogleDiscoveryEngineCmekConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#project GoogleDiscoveryEngineCmekConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.setDefault">set_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set the following CmekConfig as the default to be used for child resources if one is not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.singleRegionKeys">single_region_keys</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>]]</code> | single_region_keys block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.kmsKey"></a>

- *Type:* str

KMS key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#kms_key GoogleDiscoveryEngineCmekConfig#kms_key}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the CMEK config should reside. The value can only be one of "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#location GoogleDiscoveryEngineCmekConfig#location}

---

##### `cmek_config_id`<sup>Optional</sup> <a name="cmek_config_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.cmekConfigId"></a>

- *Type:* str

The unique id of the cmek config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#cmek_config_id GoogleDiscoveryEngineCmekConfig#cmek_config_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#id GoogleDiscoveryEngineCmekConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#project GoogleDiscoveryEngineCmekConfig#project}.

---

##### `set_default`<sup>Optional</sup> <a name="set_default" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.setDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set the following CmekConfig as the default to be used for child resources if one is not specified.

The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#set_default GoogleDiscoveryEngineCmekConfig#set_default}

---

##### `single_region_keys`<sup>Optional</sup> <a name="single_region_keys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.singleRegionKeys"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>]]

single_region_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#single_region_keys GoogleDiscoveryEngineCmekConfig#single_region_keys}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#timeouts GoogleDiscoveryEngineCmekConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putSingleRegionKeys">put_single_region_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetCmekConfigId">reset_cmek_config_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetSetDefault">reset_set_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetSingleRegionKeys">reset_single_region_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_single_region_keys` <a name="put_single_region_keys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putSingleRegionKeys"></a>

```python
def put_single_region_keys(
  value: typing.Union[IResolvable, typing.List[GoogleDiscoveryEngineCmekConfigSingleRegionKeys]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putSingleRegionKeys.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#create GoogleDiscoveryEngineCmekConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#delete GoogleDiscoveryEngineCmekConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#update GoogleDiscoveryEngineCmekConfig#update}.

---

##### `reset_cmek_config_id` <a name="reset_cmek_config_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetCmekConfigId"></a>

```python
def reset_cmek_config_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_set_default` <a name="reset_set_default" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetSetDefault"></a>

```python
def reset_set_default() -> None
```

##### `reset_single_region_keys` <a name="reset_single_region_keys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetSingleRegionKeys"></a>

```python
def reset_single_region_keys() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDiscoveryEngineCmekConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_cmek_config

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_cmek_config

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_cmek_config

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_cmek_config

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDiscoveryEngineCmekConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDiscoveryEngineCmekConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDiscoveryEngineCmekConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineCmekConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKeyVersion">kms_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.lastRotationTimestampMicros">last_rotation_timestamp_micros</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.notebooklmState">notebooklm_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.singleRegionKeys">single_region_keys</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList">GoogleDiscoveryEngineCmekConfigSingleRegionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference">GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cmekConfigIdInput">cmek_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.setDefaultInput">set_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.singleRegionKeysInput">single_region_keys_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cmekConfigId">cmek_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.setDefault">set_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kms_key_version`<sup>Required</sup> <a name="kms_key_version" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKeyVersion"></a>

```python
kms_key_version: str
```

- *Type:* str

---

##### `last_rotation_timestamp_micros`<sup>Required</sup> <a name="last_rotation_timestamp_micros" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.lastRotationTimestampMicros"></a>

```python
last_rotation_timestamp_micros: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notebooklm_state`<sup>Required</sup> <a name="notebooklm_state" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.notebooklmState"></a>

```python
notebooklm_state: str
```

- *Type:* str

---

##### `single_region_keys`<sup>Required</sup> <a name="single_region_keys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.singleRegionKeys"></a>

```python
single_region_keys: GoogleDiscoveryEngineCmekConfigSingleRegionKeysList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList">GoogleDiscoveryEngineCmekConfigSingleRegionKeysList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference">GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference</a>

---

##### `cmek_config_id_input`<sup>Optional</sup> <a name="cmek_config_id_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cmekConfigIdInput"></a>

```python
cmek_config_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `set_default_input`<sup>Optional</sup> <a name="set_default_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.setDefaultInput"></a>

```python
set_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `single_region_keys_input`<sup>Optional</sup> <a name="single_region_keys_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.singleRegionKeysInput"></a>

```python
single_region_keys_input: typing.Union[IResolvable, typing.List[GoogleDiscoveryEngineCmekConfigSingleRegionKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDiscoveryEngineCmekConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>]

---

##### `cmek_config_id`<sup>Required</sup> <a name="cmek_config_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.cmekConfigId"></a>

```python
cmek_config_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `set_default`<sup>Required</sup> <a name="set_default" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.setDefault"></a>

```python
set_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineCmekConfigConfig <a name="GoogleDiscoveryEngineCmekConfigConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_cmek_config

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kms_key: str,
  location: str,
  cmek_config_id: str = None,
  id: str = None,
  project: str = None,
  set_default: typing.Union[bool, IResolvable] = None,
  single_region_keys: typing.Union[IResolvable, typing.List[GoogleDiscoveryEngineCmekConfigSingleRegionKeys]] = None,
  timeouts: GoogleDiscoveryEngineCmekConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | KMS key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the CMEK config should reside. The value can only be one of "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.cmekConfigId">cmek_config_id</a></code> | <code>str</code> | The unique id of the cmek config. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#id GoogleDiscoveryEngineCmekConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#project GoogleDiscoveryEngineCmekConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.setDefault">set_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set the following CmekConfig as the default to be used for child resources if one is not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.singleRegionKeys">single_region_keys</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>]]</code> | single_region_keys block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

KMS key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#kms_key GoogleDiscoveryEngineCmekConfig#kms_key}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the CMEK config should reside. The value can only be one of "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#location GoogleDiscoveryEngineCmekConfig#location}

---

##### `cmek_config_id`<sup>Optional</sup> <a name="cmek_config_id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.cmekConfigId"></a>

```python
cmek_config_id: str
```

- *Type:* str

The unique id of the cmek config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#cmek_config_id GoogleDiscoveryEngineCmekConfig#cmek_config_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#id GoogleDiscoveryEngineCmekConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#project GoogleDiscoveryEngineCmekConfig#project}.

---

##### `set_default`<sup>Optional</sup> <a name="set_default" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.setDefault"></a>

```python
set_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set the following CmekConfig as the default to be used for child resources if one is not specified.

The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#set_default GoogleDiscoveryEngineCmekConfig#set_default}

---

##### `single_region_keys`<sup>Optional</sup> <a name="single_region_keys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.singleRegionKeys"></a>

```python
single_region_keys: typing.Union[IResolvable, typing.List[GoogleDiscoveryEngineCmekConfigSingleRegionKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>]]

single_region_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#single_region_keys GoogleDiscoveryEngineCmekConfig#single_region_keys}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineCmekConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#timeouts GoogleDiscoveryEngineCmekConfig#timeouts}

---

### GoogleDiscoveryEngineCmekConfigSingleRegionKeys <a name="GoogleDiscoveryEngineCmekConfigSingleRegionKeys" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_cmek_config

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys(
  kms_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys.property.kmsKey">kms_key</a></code> | <code>str</code> | Single-regional kms key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'. |

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Single-regional kms key resource name which will be used to encrypt resources 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#kms_key GoogleDiscoveryEngineCmekConfig#kms_key}

---

### GoogleDiscoveryEngineCmekConfigTimeouts <a name="GoogleDiscoveryEngineCmekConfigTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_cmek_config

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#create GoogleDiscoveryEngineCmekConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#delete GoogleDiscoveryEngineCmekConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#update GoogleDiscoveryEngineCmekConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#create GoogleDiscoveryEngineCmekConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#delete GoogleDiscoveryEngineCmekConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_discovery_engine_cmek_config#update GoogleDiscoveryEngineCmekConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineCmekConfigSingleRegionKeysList <a name="GoogleDiscoveryEngineCmekConfigSingleRegionKeysList" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_cmek_config

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDiscoveryEngineCmekConfigSingleRegionKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>]]

---


### GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference <a name="GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_cmek_config

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeysOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDiscoveryEngineCmekConfigSingleRegionKeys]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigSingleRegionKeys">GoogleDiscoveryEngineCmekConfigSingleRegionKeys</a>]

---


### GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference <a name="GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_discovery_engine_cmek_config

googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDiscoveryEngineCmekConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineCmekConfig.GoogleDiscoveryEngineCmekConfigTimeouts">GoogleDiscoveryEngineCmekConfigTimeouts</a>]

---



