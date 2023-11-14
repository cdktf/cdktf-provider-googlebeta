# `google_gke_hub_feature`

Refer to the Terraform Registory for docs: [`google_gke_hub_feature`](https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature).

# `googleGkeHubFeature` Submodule <a name="`googleGkeHubFeature` Submodule" id="@cdktf/provider-google-beta.googleGkeHubFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubFeature <a name="GoogleGkeHubFeature" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature google_gke_hub_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeature(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  fleet_default_member_config: GoogleGkeHubFeatureFleetDefaultMemberConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  project: str = None,
  spec: GoogleGkeHubFeatureSpec = None,
  timeouts: GoogleGkeHubFeatureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.fleetDefaultMemberConfig">fleet_default_member_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig">GoogleGkeHubFeatureFleetDefaultMemberConfig</a></code> | fleet_default_member_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#id GoogleGkeHubFeature#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | GCP labels for this Feature. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.name">name</a></code> | <code>str</code> | The full, unique name of this Feature resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#project GoogleGkeHubFeature#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts">GoogleGkeHubFeatureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#location GoogleGkeHubFeature#location}

---

##### `fleet_default_member_config`<sup>Optional</sup> <a name="fleet_default_member_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.fleetDefaultMemberConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig">GoogleGkeHubFeatureFleetDefaultMemberConfig</a>

fleet_default_member_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#fleet_default_member_config GoogleGkeHubFeature#fleet_default_member_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#id GoogleGkeHubFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

GCP labels for this Feature.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#labels GoogleGkeHubFeature#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.name"></a>

- *Type:* str

The full, unique name of this Feature resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#name GoogleGkeHubFeature#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#project GoogleGkeHubFeature#project}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#spec GoogleGkeHubFeature#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts">GoogleGkeHubFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#timeouts GoogleGkeHubFeature#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putFleetDefaultMemberConfig">put_fleet_default_member_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetFleetDefaultMemberConfig">reset_fleet_default_member_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetSpec">reset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_fleet_default_member_config` <a name="put_fleet_default_member_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putFleetDefaultMemberConfig"></a>

```python
def put_fleet_default_member_config(
  configmanagement: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement = None,
  mesh: GoogleGkeHubFeatureFleetDefaultMemberConfigMesh = None
) -> None
```

###### `configmanagement`<sup>Optional</sup> <a name="configmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putFleetDefaultMemberConfig.parameter.configmanagement"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement</a>

configmanagement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#configmanagement GoogleGkeHubFeature#configmanagement}

---

###### `mesh`<sup>Optional</sup> <a name="mesh" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putFleetDefaultMemberConfig.parameter.mesh"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMesh">GoogleGkeHubFeatureFleetDefaultMemberConfigMesh</a>

mesh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#mesh GoogleGkeHubFeature#mesh}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putSpec"></a>

```python
def put_spec(
  fleetobservability: GoogleGkeHubFeatureSpecFleetobservability = None,
  multiclusteringress: GoogleGkeHubFeatureSpecMulticlusteringress = None
) -> None
```

###### `fleetobservability`<sup>Optional</sup> <a name="fleetobservability" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putSpec.parameter.fleetobservability"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability">GoogleGkeHubFeatureSpecFleetobservability</a>

fleetobservability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#fleetobservability GoogleGkeHubFeature#fleetobservability}

---

###### `multiclusteringress`<sup>Optional</sup> <a name="multiclusteringress" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putSpec.parameter.multiclusteringress"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress">GoogleGkeHubFeatureSpecMulticlusteringress</a>

multiclusteringress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#multiclusteringress GoogleGkeHubFeature#multiclusteringress}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#create GoogleGkeHubFeature#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#delete GoogleGkeHubFeature#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#update GoogleGkeHubFeature#update}.

---

##### `reset_fleet_default_member_config` <a name="reset_fleet_default_member_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetFleetDefaultMemberConfig"></a>

```python
def reset_fleet_default_member_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetSpec"></a>

```python
def reset_spec() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleGkeHubFeature resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeature.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeature.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeature.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeature.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleGkeHubFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleGkeHubFeature to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleGkeHubFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.fleetDefaultMemberConfig">fleet_default_member_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference">GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.resourceState">resource_state</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList">GoogleGkeHubFeatureResourceStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference">GoogleGkeHubFeatureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.state">state</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList">GoogleGkeHubFeatureStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference">GoogleGkeHubFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.fleetDefaultMemberConfigInput">fleet_default_member_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig">GoogleGkeHubFeatureFleetDefaultMemberConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts">GoogleGkeHubFeatureTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `fleet_default_member_config`<sup>Required</sup> <a name="fleet_default_member_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.fleetDefaultMemberConfig"></a>

```python
fleet_default_member_config: GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference">GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference</a>

---

##### `resource_state`<sup>Required</sup> <a name="resource_state" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.resourceState"></a>

```python
resource_state: GoogleGkeHubFeatureResourceStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList">GoogleGkeHubFeatureResourceStateList</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.spec"></a>

```python
spec: GoogleGkeHubFeatureSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference">GoogleGkeHubFeatureSpecOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.state"></a>

```python
state: GoogleGkeHubFeatureStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList">GoogleGkeHubFeatureStateList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.timeouts"></a>

```python
timeouts: GoogleGkeHubFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference">GoogleGkeHubFeatureTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `fleet_default_member_config_input`<sup>Optional</sup> <a name="fleet_default_member_config_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.fleetDefaultMemberConfigInput"></a>

```python
fleet_default_member_config_input: GoogleGkeHubFeatureFleetDefaultMemberConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig">GoogleGkeHubFeatureFleetDefaultMemberConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.specInput"></a>

```python
spec_input: GoogleGkeHubFeatureSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleGkeHubFeatureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts">GoogleGkeHubFeatureTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeature.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubFeatureConfig <a name="GoogleGkeHubFeatureConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  fleet_default_member_config: GoogleGkeHubFeatureFleetDefaultMemberConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  project: str = None,
  spec: GoogleGkeHubFeatureSpec = None,
  timeouts: GoogleGkeHubFeatureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.fleetDefaultMemberConfig">fleet_default_member_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig">GoogleGkeHubFeatureFleetDefaultMemberConfig</a></code> | fleet_default_member_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#id GoogleGkeHubFeature#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | GCP labels for this Feature. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.name">name</a></code> | <code>str</code> | The full, unique name of this Feature resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#project GoogleGkeHubFeature#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts">GoogleGkeHubFeatureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#location GoogleGkeHubFeature#location}

---

##### `fleet_default_member_config`<sup>Optional</sup> <a name="fleet_default_member_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.fleetDefaultMemberConfig"></a>

```python
fleet_default_member_config: GoogleGkeHubFeatureFleetDefaultMemberConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig">GoogleGkeHubFeatureFleetDefaultMemberConfig</a>

fleet_default_member_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#fleet_default_member_config GoogleGkeHubFeature#fleet_default_member_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#id GoogleGkeHubFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

GCP labels for this Feature.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#labels GoogleGkeHubFeature#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The full, unique name of this Feature resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#name GoogleGkeHubFeature#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#project GoogleGkeHubFeature#project}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.spec"></a>

```python
spec: GoogleGkeHubFeatureSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#spec GoogleGkeHubFeature#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureConfig.property.timeouts"></a>

```python
timeouts: GoogleGkeHubFeatureTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts">GoogleGkeHubFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#timeouts GoogleGkeHubFeature#timeouts}

---

### GoogleGkeHubFeatureFleetDefaultMemberConfig <a name="GoogleGkeHubFeatureFleetDefaultMemberConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig(
  configmanagement: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement = None,
  mesh: GoogleGkeHubFeatureFleetDefaultMemberConfigMesh = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig.property.configmanagement">configmanagement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement</a></code> | configmanagement block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig.property.mesh">mesh</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMesh">GoogleGkeHubFeatureFleetDefaultMemberConfigMesh</a></code> | mesh block. |

---

##### `configmanagement`<sup>Optional</sup> <a name="configmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig.property.configmanagement"></a>

```python
configmanagement: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement</a>

configmanagement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#configmanagement GoogleGkeHubFeature#configmanagement}

---

##### `mesh`<sup>Optional</sup> <a name="mesh" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig.property.mesh"></a>

```python
mesh: GoogleGkeHubFeatureFleetDefaultMemberConfigMesh
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMesh">GoogleGkeHubFeatureFleetDefaultMemberConfigMesh</a>

mesh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#mesh GoogleGkeHubFeature#mesh}

---

### GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement <a name="GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement(
  config_sync: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement.property.configSync">config_sync</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync</a></code> | config_sync block. |

---

##### `config_sync`<sup>Optional</sup> <a name="config_sync" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement.property.configSync"></a>

```python
config_sync: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync</a>

config_sync block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#config_sync GoogleGkeHubFeature#config_sync}

---

### GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync <a name="GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync(
  git: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit = None,
  oci: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci = None,
  source_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.git">git</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit</a></code> | git block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.oci">oci</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci</a></code> | oci block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.sourceFormat">source_format</a></code> | <code>str</code> | Specifies whether the Config Sync Repo is in hierarchical or unstructured mode. |

---

##### `git`<sup>Optional</sup> <a name="git" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.git"></a>

```python
git: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit</a>

git block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#git GoogleGkeHubFeature#git}

---

##### `oci`<sup>Optional</sup> <a name="oci" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.oci"></a>

```python
oci: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci</a>

oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#oci GoogleGkeHubFeature#oci}

---

##### `source_format`<sup>Optional</sup> <a name="source_format" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

Specifies whether the Config Sync Repo is in hierarchical or unstructured mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#source_format GoogleGkeHubFeature#source_format}

---

### GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit <a name="GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit(
  secret_type: str,
  gcp_service_account_email: str = None,
  https_proxy: str = None,
  policy_dir: str = None,
  sync_branch: str = None,
  sync_repo: str = None,
  sync_rev: str = None,
  sync_wait_secs: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.secretType">secret_type</a></code> | <code>str</code> | Type of secret configured for access to the Git repo. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.gcpServiceAccountEmail">gcp_service_account_email</a></code> | <code>str</code> | The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.httpsProxy">https_proxy</a></code> | <code>str</code> | URL for the HTTPS Proxy to be used when communicating with the Git repo. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.policyDir">policy_dir</a></code> | <code>str</code> | The path within the Git repository that represents the top level of the repo to sync. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncBranch">sync_branch</a></code> | <code>str</code> | The branch of the repository to sync from. Default: master. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncRepo">sync_repo</a></code> | <code>str</code> | The URL of the Git repository to use as the source of truth. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncRev">sync_rev</a></code> | <code>str</code> | Git revision (tag or hash) to check out. Default HEAD. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncWaitSecs">sync_wait_secs</a></code> | <code>str</code> | Period in seconds between consecutive syncs. Default: 15. |

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

Type of secret configured for access to the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#secret_type GoogleGkeHubFeature#secret_type}

---

##### `gcp_service_account_email`<sup>Optional</sup> <a name="gcp_service_account_email" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.gcpServiceAccountEmail"></a>

```python
gcp_service_account_email: str
```

- *Type:* str

The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#gcp_service_account_email GoogleGkeHubFeature#gcp_service_account_email}

---

##### `https_proxy`<sup>Optional</sup> <a name="https_proxy" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.httpsProxy"></a>

```python
https_proxy: str
```

- *Type:* str

URL for the HTTPS Proxy to be used when communicating with the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#https_proxy GoogleGkeHubFeature#https_proxy}

---

##### `policy_dir`<sup>Optional</sup> <a name="policy_dir" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.policyDir"></a>

```python
policy_dir: str
```

- *Type:* str

The path within the Git repository that represents the top level of the repo to sync.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#policy_dir GoogleGkeHubFeature#policy_dir}

---

##### `sync_branch`<sup>Optional</sup> <a name="sync_branch" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncBranch"></a>

```python
sync_branch: str
```

- *Type:* str

The branch of the repository to sync from. Default: master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_branch GoogleGkeHubFeature#sync_branch}

---

##### `sync_repo`<sup>Optional</sup> <a name="sync_repo" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncRepo"></a>

```python
sync_repo: str
```

- *Type:* str

The URL of the Git repository to use as the source of truth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_repo GoogleGkeHubFeature#sync_repo}

---

##### `sync_rev`<sup>Optional</sup> <a name="sync_rev" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncRev"></a>

```python
sync_rev: str
```

- *Type:* str

Git revision (tag or hash) to check out. Default HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_rev GoogleGkeHubFeature#sync_rev}

---

##### `sync_wait_secs`<sup>Optional</sup> <a name="sync_wait_secs" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncWaitSecs"></a>

```python
sync_wait_secs: str
```

- *Type:* str

Period in seconds between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_wait_secs GoogleGkeHubFeature#sync_wait_secs}

---

### GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci <a name="GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci(
  secret_type: str,
  gcp_service_account_email: str = None,
  policy_dir: str = None,
  sync_repo: str = None,
  sync_wait_secs: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.secretType">secret_type</a></code> | <code>str</code> | Type of secret configured for access to the Git repo. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.gcpServiceAccountEmail">gcp_service_account_email</a></code> | <code>str</code> | The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.policyDir">policy_dir</a></code> | <code>str</code> | The absolute path of the directory that contains the local resources. Default: the root directory of the image. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.syncRepo">sync_repo</a></code> | <code>str</code> | The OCI image repository URL for the package to sync from. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.syncWaitSecs">sync_wait_secs</a></code> | <code>str</code> | Period in seconds between consecutive syncs. Default: 15. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.version">version</a></code> | <code>str</code> | Version of ACM installed. |

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

Type of secret configured for access to the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#secret_type GoogleGkeHubFeature#secret_type}

---

##### `gcp_service_account_email`<sup>Optional</sup> <a name="gcp_service_account_email" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.gcpServiceAccountEmail"></a>

```python
gcp_service_account_email: str
```

- *Type:* str

The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#gcp_service_account_email GoogleGkeHubFeature#gcp_service_account_email}

---

##### `policy_dir`<sup>Optional</sup> <a name="policy_dir" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.policyDir"></a>

```python
policy_dir: str
```

- *Type:* str

The absolute path of the directory that contains the local resources. Default: the root directory of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#policy_dir GoogleGkeHubFeature#policy_dir}

---

##### `sync_repo`<sup>Optional</sup> <a name="sync_repo" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.syncRepo"></a>

```python
sync_repo: str
```

- *Type:* str

The OCI image repository URL for the package to sync from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_repo GoogleGkeHubFeature#sync_repo}

---

##### `sync_wait_secs`<sup>Optional</sup> <a name="sync_wait_secs" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.syncWaitSecs"></a>

```python
sync_wait_secs: str
```

- *Type:* str

Period in seconds between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_wait_secs GoogleGkeHubFeature#sync_wait_secs}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.version"></a>

```python
version: str
```

- *Type:* str

Version of ACM installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#version GoogleGkeHubFeature#version}

---

### GoogleGkeHubFeatureFleetDefaultMemberConfigMesh <a name="GoogleGkeHubFeatureFleetDefaultMemberConfigMesh" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMesh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMesh.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMesh(
  management: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMesh.property.management">management</a></code> | <code>str</code> | Whether to automatically manage Service Mesh Possible values: ["MANAGEMENT_UNSPECIFIED", "MANAGEMENT_AUTOMATIC", "MANAGEMENT_MANUAL"]. |

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMesh.property.management"></a>

```python
management: str
```

- *Type:* str

Whether to automatically manage Service Mesh Possible values: ["MANAGEMENT_UNSPECIFIED", "MANAGEMENT_AUTOMATIC", "MANAGEMENT_MANUAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#management GoogleGkeHubFeature#management}

---

### GoogleGkeHubFeatureResourceState <a name="GoogleGkeHubFeatureResourceState" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceState.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureResourceState()
```


### GoogleGkeHubFeatureSpec <a name="GoogleGkeHubFeatureSpec" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureSpec(
  fleetobservability: GoogleGkeHubFeatureSpecFleetobservability = None,
  multiclusteringress: GoogleGkeHubFeatureSpecMulticlusteringress = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec.property.fleetobservability">fleetobservability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability">GoogleGkeHubFeatureSpecFleetobservability</a></code> | fleetobservability block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec.property.multiclusteringress">multiclusteringress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress">GoogleGkeHubFeatureSpecMulticlusteringress</a></code> | multiclusteringress block. |

---

##### `fleetobservability`<sup>Optional</sup> <a name="fleetobservability" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec.property.fleetobservability"></a>

```python
fleetobservability: GoogleGkeHubFeatureSpecFleetobservability
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability">GoogleGkeHubFeatureSpecFleetobservability</a>

fleetobservability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#fleetobservability GoogleGkeHubFeature#fleetobservability}

---

##### `multiclusteringress`<sup>Optional</sup> <a name="multiclusteringress" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec.property.multiclusteringress"></a>

```python
multiclusteringress: GoogleGkeHubFeatureSpecMulticlusteringress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress">GoogleGkeHubFeatureSpecMulticlusteringress</a>

multiclusteringress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#multiclusteringress GoogleGkeHubFeature#multiclusteringress}

---

### GoogleGkeHubFeatureSpecFleetobservability <a name="GoogleGkeHubFeatureSpecFleetobservability" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability(
  logging_config: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | logging_config block. |

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability.property.loggingConfig"></a>

```python
logging_config: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#logging_config GoogleGkeHubFeature#logging_config}

---

### GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig <a name="GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig(
  default_config: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig = None,
  fleet_scope_logs_config: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig.property.defaultConfig">default_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | default_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig.property.fleetScopeLogsConfig">fleet_scope_logs_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | fleet_scope_logs_config block. |

---

##### `default_config`<sup>Optional</sup> <a name="default_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig.property.defaultConfig"></a>

```python
default_config: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

default_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#default_config GoogleGkeHubFeature#default_config}

---

##### `fleet_scope_logs_config`<sup>Optional</sup> <a name="fleet_scope_logs_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig.property.fleetScopeLogsConfig"></a>

```python
fleet_scope_logs_config: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

fleet_scope_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#fleet_scope_logs_config GoogleGkeHubFeature#fleet_scope_logs_config}

---

### GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig <a name="GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.property.mode">mode</a></code> | <code>str</code> | Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#mode GoogleGkeHubFeature#mode}

---

### GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig <a name="GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.property.mode">mode</a></code> | <code>str</code> | Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#mode GoogleGkeHubFeature#mode}

---

### GoogleGkeHubFeatureSpecMulticlusteringress <a name="GoogleGkeHubFeatureSpecMulticlusteringress" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress(
  config_membership: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress.property.configMembership">config_membership</a></code> | <code>str</code> | Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: 'projects/foo-proj/locations/global/memberships/bar'. |

---

##### `config_membership`<sup>Required</sup> <a name="config_membership" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress.property.configMembership"></a>

```python
config_membership: str
```

- *Type:* str

Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: 'projects/foo-proj/locations/global/memberships/bar'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#config_membership GoogleGkeHubFeature#config_membership}

---

### GoogleGkeHubFeatureState <a name="GoogleGkeHubFeatureState" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureState.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureState()
```


### GoogleGkeHubFeatureStateState <a name="GoogleGkeHubFeatureStateState" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateState.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureStateState()
```


### GoogleGkeHubFeatureTimeouts <a name="GoogleGkeHubFeatureTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#create GoogleGkeHubFeature#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#delete GoogleGkeHubFeature#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#update GoogleGkeHubFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#create GoogleGkeHubFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#delete GoogleGkeHubFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#update GoogleGkeHubFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference <a name="GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetGcpServiceAccountEmail">reset_gcp_service_account_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetHttpsProxy">reset_https_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetPolicyDir">reset_policy_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncBranch">reset_sync_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncRepo">reset_sync_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncRev">reset_sync_rev</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncWaitSecs">reset_sync_wait_secs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gcp_service_account_email` <a name="reset_gcp_service_account_email" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetGcpServiceAccountEmail"></a>

```python
def reset_gcp_service_account_email() -> None
```

##### `reset_https_proxy` <a name="reset_https_proxy" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetHttpsProxy"></a>

```python
def reset_https_proxy() -> None
```

##### `reset_policy_dir` <a name="reset_policy_dir" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetPolicyDir"></a>

```python
def reset_policy_dir() -> None
```

##### `reset_sync_branch` <a name="reset_sync_branch" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncBranch"></a>

```python
def reset_sync_branch() -> None
```

##### `reset_sync_repo` <a name="reset_sync_repo" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncRepo"></a>

```python
def reset_sync_repo() -> None
```

##### `reset_sync_rev` <a name="reset_sync_rev" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncRev"></a>

```python
def reset_sync_rev() -> None
```

##### `reset_sync_wait_secs` <a name="reset_sync_wait_secs" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncWaitSecs"></a>

```python
def reset_sync_wait_secs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmailInput">gcp_service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.httpsProxyInput">https_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.policyDirInput">policy_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.secretTypeInput">secret_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncBranchInput">sync_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRepoInput">sync_repo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRevInput">sync_rev_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecsInput">sync_wait_secs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmail">gcp_service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.httpsProxy">https_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.policyDir">policy_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.secretType">secret_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncBranch">sync_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRepo">sync_repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRev">sync_rev</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecs">sync_wait_secs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcp_service_account_email_input`<sup>Optional</sup> <a name="gcp_service_account_email_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmailInput"></a>

```python
gcp_service_account_email_input: str
```

- *Type:* str

---

##### `https_proxy_input`<sup>Optional</sup> <a name="https_proxy_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.httpsProxyInput"></a>

```python
https_proxy_input: str
```

- *Type:* str

---

##### `policy_dir_input`<sup>Optional</sup> <a name="policy_dir_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.policyDirInput"></a>

```python
policy_dir_input: str
```

- *Type:* str

---

##### `secret_type_input`<sup>Optional</sup> <a name="secret_type_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.secretTypeInput"></a>

```python
secret_type_input: str
```

- *Type:* str

---

##### `sync_branch_input`<sup>Optional</sup> <a name="sync_branch_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncBranchInput"></a>

```python
sync_branch_input: str
```

- *Type:* str

---

##### `sync_repo_input`<sup>Optional</sup> <a name="sync_repo_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRepoInput"></a>

```python
sync_repo_input: str
```

- *Type:* str

---

##### `sync_rev_input`<sup>Optional</sup> <a name="sync_rev_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRevInput"></a>

```python
sync_rev_input: str
```

- *Type:* str

---

##### `sync_wait_secs_input`<sup>Optional</sup> <a name="sync_wait_secs_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecsInput"></a>

```python
sync_wait_secs_input: str
```

- *Type:* str

---

##### `gcp_service_account_email`<sup>Required</sup> <a name="gcp_service_account_email" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmail"></a>

```python
gcp_service_account_email: str
```

- *Type:* str

---

##### `https_proxy`<sup>Required</sup> <a name="https_proxy" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.httpsProxy"></a>

```python
https_proxy: str
```

- *Type:* str

---

##### `policy_dir`<sup>Required</sup> <a name="policy_dir" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.policyDir"></a>

```python
policy_dir: str
```

- *Type:* str

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

---

##### `sync_branch`<sup>Required</sup> <a name="sync_branch" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncBranch"></a>

```python
sync_branch: str
```

- *Type:* str

---

##### `sync_repo`<sup>Required</sup> <a name="sync_repo" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRepo"></a>

```python
sync_repo: str
```

- *Type:* str

---

##### `sync_rev`<sup>Required</sup> <a name="sync_rev" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRev"></a>

```python
sync_rev: str
```

- *Type:* str

---

##### `sync_wait_secs`<sup>Required</sup> <a name="sync_wait_secs" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecs"></a>

```python
sync_wait_secs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit</a>

---


### GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference <a name="GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetGcpServiceAccountEmail">reset_gcp_service_account_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetPolicyDir">reset_policy_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetSyncRepo">reset_sync_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetSyncWaitSecs">reset_sync_wait_secs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gcp_service_account_email` <a name="reset_gcp_service_account_email" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetGcpServiceAccountEmail"></a>

```python
def reset_gcp_service_account_email() -> None
```

##### `reset_policy_dir` <a name="reset_policy_dir" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetPolicyDir"></a>

```python
def reset_policy_dir() -> None
```

##### `reset_sync_repo` <a name="reset_sync_repo" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetSyncRepo"></a>

```python
def reset_sync_repo() -> None
```

##### `reset_sync_wait_secs` <a name="reset_sync_wait_secs" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetSyncWaitSecs"></a>

```python
def reset_sync_wait_secs() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmailInput">gcp_service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.policyDirInput">policy_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.secretTypeInput">secret_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncRepoInput">sync_repo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecsInput">sync_wait_secs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmail">gcp_service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.policyDir">policy_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.secretType">secret_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncRepo">sync_repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecs">sync_wait_secs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcp_service_account_email_input`<sup>Optional</sup> <a name="gcp_service_account_email_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmailInput"></a>

```python
gcp_service_account_email_input: str
```

- *Type:* str

---

##### `policy_dir_input`<sup>Optional</sup> <a name="policy_dir_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.policyDirInput"></a>

```python
policy_dir_input: str
```

- *Type:* str

---

##### `secret_type_input`<sup>Optional</sup> <a name="secret_type_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.secretTypeInput"></a>

```python
secret_type_input: str
```

- *Type:* str

---

##### `sync_repo_input`<sup>Optional</sup> <a name="sync_repo_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncRepoInput"></a>

```python
sync_repo_input: str
```

- *Type:* str

---

##### `sync_wait_secs_input`<sup>Optional</sup> <a name="sync_wait_secs_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecsInput"></a>

```python
sync_wait_secs_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `gcp_service_account_email`<sup>Required</sup> <a name="gcp_service_account_email" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmail"></a>

```python
gcp_service_account_email: str
```

- *Type:* str

---

##### `policy_dir`<sup>Required</sup> <a name="policy_dir" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.policyDir"></a>

```python
policy_dir: str
```

- *Type:* str

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

---

##### `sync_repo`<sup>Required</sup> <a name="sync_repo" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncRepo"></a>

```python
sync_repo: str
```

- *Type:* str

---

##### `sync_wait_secs`<sup>Required</sup> <a name="sync_wait_secs" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecs"></a>

```python
sync_wait_secs: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci</a>

---


### GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference <a name="GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit">put_git</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci">put_oci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetGit">reset_git</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetOci">reset_oci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetSourceFormat">reset_source_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_git` <a name="put_git" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit"></a>

```python
def put_git(
  secret_type: str,
  gcp_service_account_email: str = None,
  https_proxy: str = None,
  policy_dir: str = None,
  sync_branch: str = None,
  sync_repo: str = None,
  sync_rev: str = None,
  sync_wait_secs: str = None
) -> None
```

###### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.secretType"></a>

- *Type:* str

Type of secret configured for access to the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#secret_type GoogleGkeHubFeature#secret_type}

---

###### `gcp_service_account_email`<sup>Optional</sup> <a name="gcp_service_account_email" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.gcpServiceAccountEmail"></a>

- *Type:* str

The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#gcp_service_account_email GoogleGkeHubFeature#gcp_service_account_email}

---

###### `https_proxy`<sup>Optional</sup> <a name="https_proxy" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.httpsProxy"></a>

- *Type:* str

URL for the HTTPS Proxy to be used when communicating with the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#https_proxy GoogleGkeHubFeature#https_proxy}

---

###### `policy_dir`<sup>Optional</sup> <a name="policy_dir" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.policyDir"></a>

- *Type:* str

The path within the Git repository that represents the top level of the repo to sync.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#policy_dir GoogleGkeHubFeature#policy_dir}

---

###### `sync_branch`<sup>Optional</sup> <a name="sync_branch" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.syncBranch"></a>

- *Type:* str

The branch of the repository to sync from. Default: master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_branch GoogleGkeHubFeature#sync_branch}

---

###### `sync_repo`<sup>Optional</sup> <a name="sync_repo" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.syncRepo"></a>

- *Type:* str

The URL of the Git repository to use as the source of truth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_repo GoogleGkeHubFeature#sync_repo}

---

###### `sync_rev`<sup>Optional</sup> <a name="sync_rev" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.syncRev"></a>

- *Type:* str

Git revision (tag or hash) to check out. Default HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_rev GoogleGkeHubFeature#sync_rev}

---

###### `sync_wait_secs`<sup>Optional</sup> <a name="sync_wait_secs" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.syncWaitSecs"></a>

- *Type:* str

Period in seconds between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_wait_secs GoogleGkeHubFeature#sync_wait_secs}

---

##### `put_oci` <a name="put_oci" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci"></a>

```python
def put_oci(
  secret_type: str,
  gcp_service_account_email: str = None,
  policy_dir: str = None,
  sync_repo: str = None,
  sync_wait_secs: str = None,
  version: str = None
) -> None
```

###### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci.parameter.secretType"></a>

- *Type:* str

Type of secret configured for access to the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#secret_type GoogleGkeHubFeature#secret_type}

---

###### `gcp_service_account_email`<sup>Optional</sup> <a name="gcp_service_account_email" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci.parameter.gcpServiceAccountEmail"></a>

- *Type:* str

The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#gcp_service_account_email GoogleGkeHubFeature#gcp_service_account_email}

---

###### `policy_dir`<sup>Optional</sup> <a name="policy_dir" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci.parameter.policyDir"></a>

- *Type:* str

The absolute path of the directory that contains the local resources. Default: the root directory of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#policy_dir GoogleGkeHubFeature#policy_dir}

---

###### `sync_repo`<sup>Optional</sup> <a name="sync_repo" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci.parameter.syncRepo"></a>

- *Type:* str

The OCI image repository URL for the package to sync from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_repo GoogleGkeHubFeature#sync_repo}

---

###### `sync_wait_secs`<sup>Optional</sup> <a name="sync_wait_secs" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci.parameter.syncWaitSecs"></a>

- *Type:* str

Period in seconds between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_wait_secs GoogleGkeHubFeature#sync_wait_secs}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci.parameter.version"></a>

- *Type:* str

Version of ACM installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#version GoogleGkeHubFeature#version}

---

##### `reset_git` <a name="reset_git" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetGit"></a>

```python
def reset_git() -> None
```

##### `reset_oci` <a name="reset_oci" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetOci"></a>

```python
def reset_oci() -> None
```

##### `reset_source_format` <a name="reset_source_format" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetSourceFormat"></a>

```python
def reset_source_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.git">git</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.oci">oci</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.gitInput">git_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.ociInput">oci_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.sourceFormatInput">source_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.sourceFormat">source_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git`<sup>Required</sup> <a name="git" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.git"></a>

```python
git: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference</a>

---

##### `oci`<sup>Required</sup> <a name="oci" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.oci"></a>

```python
oci: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference</a>

---

##### `git_input`<sup>Optional</sup> <a name="git_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.gitInput"></a>

```python
git_input: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit</a>

---

##### `oci_input`<sup>Optional</sup> <a name="oci_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.ociInput"></a>

```python
oci_input: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci</a>

---

##### `source_format_input`<sup>Optional</sup> <a name="source_format_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.sourceFormatInput"></a>

```python
source_format_input: str
```

- *Type:* str

---

##### `source_format`<sup>Required</sup> <a name="source_format" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync</a>

---


### GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference <a name="GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.putConfigSync">put_config_sync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.resetConfigSync">reset_config_sync</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config_sync` <a name="put_config_sync" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.putConfigSync"></a>

```python
def put_config_sync(
  git: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit = None,
  oci: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci = None,
  source_format: str = None
) -> None
```

###### `git`<sup>Optional</sup> <a name="git" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.putConfigSync.parameter.git"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit</a>

git block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#git GoogleGkeHubFeature#git}

---

###### `oci`<sup>Optional</sup> <a name="oci" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.putConfigSync.parameter.oci"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci</a>

oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#oci GoogleGkeHubFeature#oci}

---

###### `source_format`<sup>Optional</sup> <a name="source_format" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.putConfigSync.parameter.sourceFormat"></a>

- *Type:* str

Specifies whether the Config Sync Repo is in hierarchical or unstructured mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#source_format GoogleGkeHubFeature#source_format}

---

##### `reset_config_sync` <a name="reset_config_sync" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.resetConfigSync"></a>

```python
def reset_config_sync() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.configSync">config_sync</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.configSyncInput">config_sync_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_sync`<sup>Required</sup> <a name="config_sync" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.configSync"></a>

```python
config_sync: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference</a>

---

##### `config_sync_input`<sup>Optional</sup> <a name="config_sync_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.configSyncInput"></a>

```python
config_sync_input: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement</a>

---


### GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference <a name="GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.managementInput">management_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.management">management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMesh">GoogleGkeHubFeatureFleetDefaultMemberConfigMesh</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `management_input`<sup>Optional</sup> <a name="management_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.managementInput"></a>

```python
management_input: str
```

- *Type:* str

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.management"></a>

```python
management: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureFleetDefaultMemberConfigMesh
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMesh">GoogleGkeHubFeatureFleetDefaultMemberConfigMesh</a>

---


### GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference <a name="GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.putConfigmanagement">put_configmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.putMesh">put_mesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.resetConfigmanagement">reset_configmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.resetMesh">reset_mesh</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configmanagement` <a name="put_configmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.putConfigmanagement"></a>

```python
def put_configmanagement(
  config_sync: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync = None
) -> None
```

###### `config_sync`<sup>Optional</sup> <a name="config_sync" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.putConfigmanagement.parameter.configSync"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync</a>

config_sync block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#config_sync GoogleGkeHubFeature#config_sync}

---

##### `put_mesh` <a name="put_mesh" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.putMesh"></a>

```python
def put_mesh(
  management: str
) -> None
```

###### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.putMesh.parameter.management"></a>

- *Type:* str

Whether to automatically manage Service Mesh Possible values: ["MANAGEMENT_UNSPECIFIED", "MANAGEMENT_AUTOMATIC", "MANAGEMENT_MANUAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#management GoogleGkeHubFeature#management}

---

##### `reset_configmanagement` <a name="reset_configmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.resetConfigmanagement"></a>

```python
def reset_configmanagement() -> None
```

##### `reset_mesh` <a name="reset_mesh" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.resetMesh"></a>

```python
def reset_mesh() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.property.configmanagement">configmanagement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.property.mesh">mesh</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference">GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.property.configmanagementInput">configmanagement_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.property.meshInput">mesh_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMesh">GoogleGkeHubFeatureFleetDefaultMemberConfigMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig">GoogleGkeHubFeatureFleetDefaultMemberConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configmanagement`<sup>Required</sup> <a name="configmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.property.configmanagement"></a>

```python
configmanagement: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference</a>

---

##### `mesh`<sup>Required</sup> <a name="mesh" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.property.mesh"></a>

```python
mesh: GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference">GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference</a>

---

##### `configmanagement_input`<sup>Optional</sup> <a name="configmanagement_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.property.configmanagementInput"></a>

```python
configmanagement_input: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement">GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement</a>

---

##### `mesh_input`<sup>Optional</sup> <a name="mesh_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.property.meshInput"></a>

```python
mesh_input: GoogleGkeHubFeatureFleetDefaultMemberConfigMesh
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigMesh">GoogleGkeHubFeatureFleetDefaultMemberConfigMesh</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureFleetDefaultMemberConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureFleetDefaultMemberConfig">GoogleGkeHubFeatureFleetDefaultMemberConfig</a>

---


### GoogleGkeHubFeatureResourceStateList <a name="GoogleGkeHubFeatureResourceStateList" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeHubFeatureResourceStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleGkeHubFeatureResourceStateOutputReference <a name="GoogleGkeHubFeatureResourceStateOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.hasResources">has_resources</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceState">GoogleGkeHubFeatureResourceState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `has_resources`<sup>Required</sup> <a name="has_resources" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.hasResources"></a>

```python
has_resources: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceStateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureResourceState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureResourceState">GoogleGkeHubFeatureResourceState</a>

---


### GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference <a name="GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

---


### GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference <a name="GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

---


### GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference <a name="GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig">put_default_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig">put_fleet_scope_logs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetDefaultConfig">reset_default_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetFleetScopeLogsConfig">reset_fleet_scope_logs_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_config` <a name="put_default_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig"></a>

```python
def put_default_config(
  mode: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig.parameter.mode"></a>

- *Type:* str

Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#mode GoogleGkeHubFeature#mode}

---

##### `put_fleet_scope_logs_config` <a name="put_fleet_scope_logs_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig"></a>

```python
def put_fleet_scope_logs_config(
  mode: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig.parameter.mode"></a>

- *Type:* str

Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#mode GoogleGkeHubFeature#mode}

---

##### `reset_default_config` <a name="reset_default_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetDefaultConfig"></a>

```python
def reset_default_config() -> None
```

##### `reset_fleet_scope_logs_config` <a name="reset_fleet_scope_logs_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetFleetScopeLogsConfig"></a>

```python
def reset_fleet_scope_logs_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfig">default_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfig">fleet_scope_logs_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfigInput">default_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfigInput">fleet_scope_logs_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_config`<sup>Required</sup> <a name="default_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfig"></a>

```python
default_config: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference</a>

---

##### `fleet_scope_logs_config`<sup>Required</sup> <a name="fleet_scope_logs_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfig"></a>

```python
fleet_scope_logs_config: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference</a>

---

##### `default_config_input`<sup>Optional</sup> <a name="default_config_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfigInput"></a>

```python
default_config_input: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

---

##### `fleet_scope_logs_config_input`<sup>Optional</sup> <a name="fleet_scope_logs_config_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfigInput"></a>

```python
fleet_scope_logs_config_input: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

---


### GoogleGkeHubFeatureSpecFleetobservabilityOutputReference <a name="GoogleGkeHubFeatureSpecFleetobservabilityOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  default_config: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig = None,
  fleet_scope_logs_config: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig = None
) -> None
```

###### `default_config`<sup>Optional</sup> <a name="default_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig.parameter.defaultConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

default_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#default_config GoogleGkeHubFeature#default_config}

---

###### `fleet_scope_logs_config`<sup>Optional</sup> <a name="fleet_scope_logs_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig.parameter.fleetScopeLogsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

fleet_scope_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#fleet_scope_logs_config GoogleGkeHubFeature#fleet_scope_logs_config}

---

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability">GoogleGkeHubFeatureSpecFleetobservability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfig"></a>

```python
logging_config: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference</a>

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureSpecFleetobservability
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability">GoogleGkeHubFeatureSpecFleetobservability</a>

---


### GoogleGkeHubFeatureSpecMulticlusteringressOutputReference <a name="GoogleGkeHubFeatureSpecMulticlusteringressOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembershipInput">config_membership_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembership">config_membership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress">GoogleGkeHubFeatureSpecMulticlusteringress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_membership_input`<sup>Optional</sup> <a name="config_membership_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembershipInput"></a>

```python
config_membership_input: str
```

- *Type:* str

---

##### `config_membership`<sup>Required</sup> <a name="config_membership" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembership"></a>

```python
config_membership: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureSpecMulticlusteringress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress">GoogleGkeHubFeatureSpecMulticlusteringress</a>

---


### GoogleGkeHubFeatureSpecOutputReference <a name="GoogleGkeHubFeatureSpecOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.putFleetobservability">put_fleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.putMulticlusteringress">put_multiclusteringress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.resetFleetobservability">reset_fleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.resetMulticlusteringress">reset_multiclusteringress</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fleetobservability` <a name="put_fleetobservability" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.putFleetobservability"></a>

```python
def put_fleetobservability(
  logging_config: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig = None
) -> None
```

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.putFleetobservability.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig">GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#logging_config GoogleGkeHubFeature#logging_config}

---

##### `put_multiclusteringress` <a name="put_multiclusteringress" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.putMulticlusteringress"></a>

```python
def put_multiclusteringress(
  config_membership: str
) -> None
```

###### `config_membership`<sup>Required</sup> <a name="config_membership" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.putMulticlusteringress.parameter.configMembership"></a>

- *Type:* str

Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: 'projects/foo-proj/locations/global/memberships/bar'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#config_membership GoogleGkeHubFeature#config_membership}

---

##### `reset_fleetobservability` <a name="reset_fleetobservability" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.resetFleetobservability"></a>

```python
def reset_fleetobservability() -> None
```

##### `reset_multiclusteringress` <a name="reset_multiclusteringress" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.resetMulticlusteringress"></a>

```python
def reset_multiclusteringress() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.fleetobservability">fleetobservability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.multiclusteringress">multiclusteringress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference">GoogleGkeHubFeatureSpecMulticlusteringressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.fleetobservabilityInput">fleetobservability_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability">GoogleGkeHubFeatureSpecFleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.multiclusteringressInput">multiclusteringress_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress">GoogleGkeHubFeatureSpecMulticlusteringress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fleetobservability`<sup>Required</sup> <a name="fleetobservability" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.fleetobservability"></a>

```python
fleetobservability: GoogleGkeHubFeatureSpecFleetobservabilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservabilityOutputReference">GoogleGkeHubFeatureSpecFleetobservabilityOutputReference</a>

---

##### `multiclusteringress`<sup>Required</sup> <a name="multiclusteringress" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.multiclusteringress"></a>

```python
multiclusteringress: GoogleGkeHubFeatureSpecMulticlusteringressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringressOutputReference">GoogleGkeHubFeatureSpecMulticlusteringressOutputReference</a>

---

##### `fleetobservability_input`<sup>Optional</sup> <a name="fleetobservability_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.fleetobservabilityInput"></a>

```python
fleetobservability_input: GoogleGkeHubFeatureSpecFleetobservability
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecFleetobservability">GoogleGkeHubFeatureSpecFleetobservability</a>

---

##### `multiclusteringress_input`<sup>Optional</sup> <a name="multiclusteringress_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.multiclusteringressInput"></a>

```python
multiclusteringress_input: GoogleGkeHubFeatureSpecMulticlusteringress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecMulticlusteringress">GoogleGkeHubFeatureSpecMulticlusteringress</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureSpec">GoogleGkeHubFeatureSpec</a>

---


### GoogleGkeHubFeatureStateList <a name="GoogleGkeHubFeatureStateList" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeHubFeatureStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleGkeHubFeatureStateOutputReference <a name="GoogleGkeHubFeatureStateOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.state">state</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList">GoogleGkeHubFeatureStateStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureState">GoogleGkeHubFeatureState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.state"></a>

```python
state: GoogleGkeHubFeatureStateStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList">GoogleGkeHubFeatureStateStateList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureState">GoogleGkeHubFeatureState</a>

---


### GoogleGkeHubFeatureStateStateList <a name="GoogleGkeHubFeatureStateStateList" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureStateStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeHubFeatureStateStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleGkeHubFeatureStateStateOutputReference <a name="GoogleGkeHubFeatureStateStateOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateState">GoogleGkeHubFeatureStateState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateStateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeHubFeatureStateState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureStateState">GoogleGkeHubFeatureStateState</a>

---


### GoogleGkeHubFeatureTimeoutsOutputReference <a name="GoogleGkeHubFeatureTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_hub_feature

googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts">GoogleGkeHubFeatureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGkeHubFeatureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeHubFeature.GoogleGkeHubFeatureTimeouts">GoogleGkeHubFeatureTimeouts</a>]

---



